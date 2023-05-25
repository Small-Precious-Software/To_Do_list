from django.db import models
from django.shortcuts import render


class Category(models.Model):
    name = models.CharField(max_length=30, unique=True)
    slug = models.SlugField(max_length=50, unique=True, allow_unicode=True)

    def get_absolute_url(self):
        return f'/todo/category/{self.slug}'

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Categories'


class Task(models.Model):
    name = models.CharField(max_length=100)
    memo = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    category = models.ForeignKey(Category, blank=True, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return f'{self.name}'

    def get_absolute_url(self):
        return f'/todo/{self.pk}'
