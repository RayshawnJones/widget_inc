from django.urls import path
from .views import widget_list, widget_detail, widget_list_api, widget_detail_api

urlpatterns = [
    path('widgets/', widget_list, name='widget-list'),
    path('widgets/<int:pk>/', widget_detail, name='widget-detail'),
    path('api/widgets/', widget_list_api, name='widget-list-api'),
    path('api/widgets/<int:pk>/', widget_detail_api, name='widget-detail-api'),
]
