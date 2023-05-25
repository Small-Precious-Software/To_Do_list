import calendar
from datetime import datetime
from django.shortcuts import render, redirect
from django.views.generic import ListView, DetailView

from .models import Task, Category


class TodoList(ListView):
    model = Task
    ordering = '-pk'

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super(TodoList, self).get_context_data()
        context['categories'] = Category.objects.all()
        context['no_category_count'] = Task.objects.filter(category=None).count()

        return context


class TodoDetail(DetailView):
    model = Task

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super(TodoDetail, self).get_context_data()
        context['categories'] = Category.objects.all()
        context['no_category_count'] = Task.objects.filter(category=None).count()
        return context


def categories_page(request, slug):
    if slug == 'no-category':
        category = '미분류'
        task_list = Task.objects.filter(category=None)
    else:
        category = Category.objects.get(slug=slug)
        task_list = Task.objects.filter(category=category)

    context = {
        'category': category,
        'categories': Category.objects.all(),
        'task_list': task_list,
        'no_category_count': Task.objects.filter(category=None).count()
    }
    return render(request, 'task_list.html', context)
