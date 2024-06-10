from django.urls import path
from .views import widget_list, widget_detail, widget_list_api, widget_detail_api

# Define URL patterns for the widgets application
urlpatterns = [
    # URL pattern for the HTML view of the widget list
    # This will map the URL 'widgets/' to the 'widget_list' view
    path('widgets/', widget_list, name='widget-list'),
    
    # URL pattern for the HTML view of a specific widget detail
    # This will map the URL 'widgets/<int:pk>/' to the 'widget_detail' view
    # <int:pk> is a path converter that captures an integer parameter and passes it to the view as 'pk'
    path('widgets/<int:pk>/', widget_detail, name='widget-detail'),
    
    # URL pattern for the API view of the widget list
    # This will map the URL 'api/widgets/' to the 'widget_list_api' view
    path('api/widgets/', widget_list_api, name='widget-list-api'),
    
    # URL pattern for the API view of a specific widget detail
    # This will map the URL 'api/widgets/<int:pk>/' to the 'widget_detail_api' view
    # <int:pk> is a path converter that captures an integer parameter and passes it to the view as 'pk'
    path('api/widgets/<int:pk>/', widget_detail_api, name='widget-detail-api'),
]
