from django.shortcuts import render


def start(request):
    return render(request, 'start.html')


def login(request):
    return render(request, 'login.html')
