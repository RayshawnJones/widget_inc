from django.shortcuts import render, get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponse
from rest_framework.parsers import JSONParser
from .models import Widget
from .serializers import WidgetSerializer

def widget_list(request):
    widgets = Widget.objects.all()
    return render(request, 'widgets/widget_list.html', {'widgets': widgets})

def widget_detail(request, pk):
    widget = get_object_or_404(Widget, pk=pk)
    return render(request, 'widgets/widget_detail.html', {'widget': widget})

@csrf_exempt
def widget_list_api(request):
    if request.method == 'GET':
        widgets = Widget.objects.all()
        serializer = WidgetSerializer(widgets, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = WidgetSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def widget_detail_api(request, pk):
    widget = get_object_or_404(Widget, pk=pk)
    if request.method == 'GET':
        serializer = WidgetSerializer(widget)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = WidgetSerializer(widget, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
    elif request.method == 'DELETE':
        widget.delete()
        return HttpResponse(status=204)
