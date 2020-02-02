from rest_framework import serializers
from .models import TestApi


class TestApiSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'message'
        )
        model = TestApi