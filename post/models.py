from django.db import models
from user.models import User

class Category(models.Model):
  title = models.CharField(max_length=50, unique=True)
  slug = models.SlugField(max_length=50, unique=True, blank=True, null=True)
  
  def __str__(self):
    return f'[{self.title}]'
  
# Create your models here.
class Post(models.Model):
  title = models.CharField(max_length=50)
  content = models.TextField()
  created_at = models.DateTimeField(auto_now_add=True) #생성일자
  user = models.ForeignKey(User, related_name="post_user", on_delete=models.CASCADE)
  anonymity = models.BooleanField(default="True")
  scrap_users = models.ManyToManyField(to=User, through="Scrap", related_name="scrap_users")
  like_users = models.ManyToManyField(to=User, through="PostLike", related_name="post_like_users")
  category = models.ForeignKey(to=Category, related_name="post_category", on_delete=models.CASCADE, blank=True, null=True)
  def __str__(self):
    return f'[{self.id}-{self.title}]'

class Scrap(models.Model):
  user = models.ForeignKey(to=User, on_delete=models.CASCADE)
  post = models.ForeignKey(to=Post, on_delete=models.CASCADE)

class PostLike(models.Model):
  user = models.ForeignKey(to=User, related_name= 'post_like_user', on_delete=models.CASCADE)
  post = models.ForeignKey(to=Post, related_name="post_like", on_delete=models.CASCADE)

class Comment(models.Model):
  content = models.TextField()
  user = models.ForeignKey(User, related_name="comment_user", on_delete=models.CASCADE)
  post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="posts")
  created_at = models.DateTimeField(auto_now_add=True)
  anonymity = models.BooleanField(default=True)