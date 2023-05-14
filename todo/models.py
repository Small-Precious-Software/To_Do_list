from django.db import models


# Create your models here.
class Task(models.Model):
    name = models.CharField(max_length=100)
    memo = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
