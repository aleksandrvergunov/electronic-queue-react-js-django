from rest_framework import generics

from .models import TestApi
from .serializers import TestApiSerializer


class TestApiMessage(generics.ListCreateAPIView):
    queryset = TestApi.objects.all()
    serializer_class = TestApiSerializer


# class DetailTodo(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Todo.objects.all()
#     serializer_class = TodoSerializer