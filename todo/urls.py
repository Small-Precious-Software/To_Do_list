from django.urls import path
from . import views


urlpatterns = [
    path('', views.TodoList.as_view()),
    path('<int:pk>/', views.TodoDetail.as_view()),
    path('category/<str:slug>/', views.categories_page),
]
