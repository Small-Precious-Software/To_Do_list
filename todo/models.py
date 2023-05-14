from django.db import models


# Create your models here.
class Post(models.Model):
    todo_title = models.CharField(max_length=30)
    note = models.TextField()

    create_at = models.DateField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)