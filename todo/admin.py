from django.contrib import admin
from .models import Task, Category

# Register your models here.


admin.site.register(Task)


class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name',)}


admin.site.register(Category)
