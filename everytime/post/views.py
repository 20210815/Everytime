from asyncio.windows_events import NULL
from django.shortcuts import render, get_object_or_404, redirect
from .models import Post
from django.contrib.auth.decorators import login_required
from user.models import User
from django.db.models import F, ExpressionWrapper, fields
from django.utils import timezone
from django.views.generic import ListView
# Create your views here.
def list(request):
  posts = Post.objects.all().order_by('-id')
  
  # print(request.user.post_user.all())
  #posts = Post.objects.annotate(comment_count=Count('comment')).order_by('-id')
  return render(request, 'post/list.html', {'posts': posts})


def detail(request, id):
  post = get_object_or_404(Post, pk=id)
  #comments = Comment.objects.filter(post = post)
  #해당 순서대로 번호 부여할 수 있도록....
  #com_count = ComCount.objects.filter(post=post)
  return render(request, "post/detail.html", {'post': post})#, 'comments': comments, 'com_count': com_count})


@login_required
def create(request):#, slug):
  if request.method == "POST":
    new_post = Post()
    new_post.title = request.POST['title']
    new_post.content = request.POST['content']
    new_post.user = request.user
    #new_post.category = Category.objects.get(slug=slug)
    print(request.POST.get('anonymity'))
    if request.POST.get('anonymity') == None:
      new_post.anonymity = False
      new_post.save()
    new_post.save()
    return redirect ("post:list")
    #return redirect("board:category_post_list", slug)
  else:
    return render(request, "post/list.html")#, {'slug':slug} )


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
  #category = post.category.slug
  #print(category)
  post.delete()
  return redirect("post:list")
  # return redirect("post:category_post_list", category)

# def home(request):
#     # 최근 게시물
#     recent_posts = []
#     category_list = Category.objects.all()
#     for category in category_list:
#         posts = Post.objects.filter(category=category).order_by('-created_at')[:4]
#         recent_posts.extend(posts)
#     return render(request, "board/home.html", {'category_list': category_list, 'recent_posts': recent_posts})