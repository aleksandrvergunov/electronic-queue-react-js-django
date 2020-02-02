from django.urls import path

from .views import CustomObtainAuthToken
# auth
urlpatterns = [
    path('authenticate/', CustomObtainAuthToken.as_view()),
]