import calendar
from datetime import datetime
from django.shortcuts import render, redirect
from .models import Task


def index(request):
    if request.method == 'POST':
        name = request.POST['name']
        memo = request.POST['memo']
        task = Task(name=name, memo=memo)
        task.save()
        return redirect('index')

    tasks = Task.objects.all().order_by('-created_at')

    # 달력 생성
    now = datetime.now()
    year = now.year
    month = now.month
    cal = calendar.monthcalendar(year, month)

    links = {}
    for week in cal:
        for i, day in enumerate(week):
            if day != 0:
                date = datetime(year, month, day).strftime('%Y-%m-%d')
                links[date] = f'/tasks/{date}'

    context = {
        'tasks': tasks,
        'calendar': cal,
        'links': links,
    }
    return render(request, 'index.html', context)
