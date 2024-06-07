from django.shortcuts import render
from .models import Widget

def widget_list(request):
    widgets = Widget.objects.all()
    return render(request, 'widgets/widget_list.html', {'widgets': widgets})

def widget_detail(request, pk):
    widget = Widget.objects.get(pk=pk)
    return render(request, 'widgets/widget_detail.html', {'widget': widget})
