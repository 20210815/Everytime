from django.contrib import admin
from .models import Post, Category, Comment, PostLike, Scrap
# Register your models here.

class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug':('title',)}

admin.site.register(Post)
# admin.site.register(Category)
admin.site.register(Category, CategoryAdmin)
admin.site.register(PostLike)
admin.site.register(Comment)
admin.site.register(Scrap)