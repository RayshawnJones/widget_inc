from django.urls import path
from . import views

urlpatterns = [
    path('', views.widget_list, name='widget_list'),
    path('<int:pk>/', views.widget_detail, name='widget_detail'),
]
