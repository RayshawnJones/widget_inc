from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('widgets.urls')),  # Ensure this line includes the widgets URLs
]
