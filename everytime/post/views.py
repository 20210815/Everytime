from asyncio.windows_events import NULL
from django.shortcuts import render, get_object_or_404, redirect
from .models import Post, Category, Scrap, PostLike, Comment
from django.contrib.auth.decorators import login_required
from user.models import User
from django.db.models import F, ExpressionWrapper, fields
from django.utils import timezone
from django.views.generic import ListView
# Create your views here.
# def list(request):
#   posts = Post.objects.all().order_by('-id')
  
#   # print(request.user.post_user.all())
#   #posts = Post.objects.annotate(comment_count=Count('comment')).order_by('-id')
#   return render(request, 'post/home.html', {'posts': posts})


def detail(request, id):
  post = get_object_or_404(Post, pk=id)
  comments = Comment.objects.filter(post = post)
  #해당 순서대로 번호 부여할 수 있도록....
  #com_count = ComCount.objects.filter(post=post)
  return render(request, "post/detail.html", {'post': post, 'comments': comments})#, 'com_count': com_count})


@login_required
def create(request, slug):
  if request.method == "POST":
    new_post = Post()
    new_post.title = request.POST['title']
    new_post.content = request.POST['content']
    new_post.user = request.user
    new_post.category = Category.objects.get(slug=slug)
    print(request.POST.get('anonymity'))
    if request.POST.get('anonymity') == None:
      new_post.anonymity = False
      new_post.save()
    new_post.save()
    #return redirect ("post:list")
    return redirect("post:category_post_list", slug)
  # else:
  #   return render(request, "post/category_post_list.html", {'slug':slug} )


@login_required
def update(request, id):
  post = get_object_or_404(Post, pk=id)
  if request.method == "POST":
    post.title = request.POST['title']
    post.content = request.POST['content']

    post.save()
    return redirect("post:detail", post.id)
  elif request.method == "GET":
    return render(request, "post/update.html", {'post': post})
  

def delete(request,id):
  post = get_object_or_404(Post, pk=id)
  category = post.category.slug
  #print(category)
  post.delete()
  #return redirect("post:list")
  return redirect("post:category_post_list", category)

def home(request):
    # 최근 게시물
    recent_posts = []
    category_list = Category.objects.all()
    for category in category_list:
        posts = Post.objects.filter(category=category).order_by('-created_at')[:4]
        recent_posts.extend(posts)
    return render(request, "post/home.html", {'category_list': category_list, 'recent_posts': recent_posts})



@login_required
def com_create(request, id):
  if request.method == "POST":
    comment = Comment()
    comment.user = request.user
    comment.content = request.POST['content']
    comment.post = Post.objects.get(pk=id)
    if request.POST.get('anonymity') == None:
      comment.anonymity = False
    # 익명 카운트 부름
    comment.save()
    #com_count(id, request)
    return redirect("post:detail", id)
  
def com_delete(request, com_id, post_id):
  post = Post.objects.get(pk=post_id)
  comment = Comment.objects.get(pk=com_id)
  comment.delete()

  return redirect("post:detail", post_id)



@login_required
def post_like(request, post_id):
  post = Post.objects.get(pk=post_id)
  user = request.user

  if post.like_users.filter(pk=user.pk).exists():
    post.like_users.remove(user)
    
  else:
    #관계 설정
    post.like_users.add(user)
    
  return redirect("post:detail", post_id)


@login_required
def post_scrap (request, post_id):
  post = Post.objects.get(pk=post_id)
  user = request.user

  if post.scrap_users.filter(pk=user.pk).exists():
    post.scrap_users.remove(user)
    
  else:
    post.scrap_users.add(user)
    # Scrap.objects.create(post=post, user=user)
    
  return redirect("post:detail", post_id)


def home(request):
    # 최근 게시물
    recent_posts = []
    category_list = Category.objects.all()
    for category in category_list:
        posts = Post.objects.filter(category=category).order_by('-created_at')[:4]
        recent_posts.extend(posts)
    return render(request, "post/home.html", {'category_list': category_list, 'recent_posts': recent_posts})


def category_post_list(request, slug):
  category = Category.objects.get(slug=slug)
  category_list = Category.objects.all()
  posts = Post.objects.filter(category = category).order_by('-id')

  return render(request, "post/category.html", {'category': category, 'posts':posts, 'category_list': category_list})

def start(request):
    # start.html을 렌더링하는 로직
    return render(request, 'post/start.html')