from django.db import models

class TestApi(models.Model):
    message = models.TextField(max_length=100)

    def __str__(self):
        return self.message