from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('test/', include('testApi.urls')),
    path('token-signin/', include('signIn.urls'), name='token-signin')
]
