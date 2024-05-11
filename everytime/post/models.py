from django.db import models
from user.models import User

# Create your models here.
class Post(models.Model):
  title = models.CharField(max_length=50)
  content = models.TextField()
  created_at = models.DateTimeField(auto_now_add=True) #생성일자
  user = models.ForeignKey(User, related_name="post_user", on_delete=models.CASCADE)
  anonymity = models.BooleanField(default="True")
#  scrap_users = models.ManyToManyField(to=User, through="Scrap", related_name="scrap_users")
#  like_users = models.ManyToManyField(to=User, through="PostLike", related_name="post_like_users")
#  category = models.ForeignKey(to=Category, related_name="post_category", on_delete=models.CASCADE, blank=True, null=True)
  def __str__(self):
    return f'[{self.id}-{self.title}]'