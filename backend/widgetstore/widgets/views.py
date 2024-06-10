from django.shortcuts import render, get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponse
from rest_framework.parsers import JSONParser
from .models import Widget
from .serializers import WidgetSerializer

# View to display a list of all widgets in HTML format
def widget_list(request):
    widgets = Widget.objects.all()  # Retrieve all widget objects from the database
    return render(request, 'widgets/widget_list.html', {'widgets': widgets})  # Render the widget list template with the widgets context

# View to display the details of a single widget in HTML format
def widget_detail(request, pk):
    widget = get_object_or_404(Widget, pk=pk)  # Retrieve the widget object with the given primary key (pk) or return a 404 error if not found
    return render(request, 'widgets/widget_detail.html', {'widget': widget})  # Render the widget detail template with the widget context

# API view to handle GET and POST requests for the list of widgets
@csrf_exempt  # Exempt this view from CSRF(Cross-Site Request Forgery) verification (not recommended for production)
def widget_list_api(request):
    if request.method == 'GET':
        widgets = Widget.objects.all()  # Retrieve all widget objects from the database
        serializer = WidgetSerializer(widgets, many=True)  # Serialize the widget objects into JSON format
        return JsonResponse(serializer.data, safe=False)  # Return the serialized data as a JSON response
    elif request.method == 'POST':
        data = JSONParser().parse(request)  # Parse the incoming JSON data from the request body
        serializer = WidgetSerializer(data=data)  # Deserialize the data into a WidgetSerializer
        if serializer.is_valid():  # Check if the deserialized data is valid
            serializer.save()  # Save the new widget object to the database
            return JsonResponse(serializer.data, status=201)  # Return the serialized data of the created widget with a 201 status code
        return JsonResponse(serializer.errors, status=400)  # Return the validation errors with a 400 status code

# API view to handle GET, PUT, and DELETE requests for a single widget
@csrf_exempt  # Exempt this view from CSRF verification (not recommended for production)
def widget_detail_api(request, pk):
    widget = get_object_or_404(Widget, pk=pk)  # Retrieve the widget object with the given primary key (pk) or return a 404 error if not found
    if request.method == 'GET':
        serializer = WidgetSerializer(widget)  # Serialize the widget object into JSON format
        return JsonResponse(serializer.data)  # Return the serialized data as a JSON response
    elif request.method == 'PUT':
        data = JSONParser().parse(request)  # Parse the incoming JSON data from the request body
        serializer = WidgetSerializer(widget, data=data)  # Deserialize the data and update the existing widget object
        if serializer.is_valid():  # Check if the deserialized data is valid
            serializer.save()  # Save the updated widget object to the database
            return JsonResponse(serializer.data)  # Return the serialized data of the updated widget
        return JsonResponse(serializer.errors, status=400)  # Return the validation errors with a 400 status code
    elif request.method == 'DELETE':
        widget.delete()  # Delete the widget object from the database
        return HttpResponse(status=204)  # Return a 204 status code indicating successful deletion
