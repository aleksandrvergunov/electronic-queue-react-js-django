from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.TestApiMessage.as_view())
]