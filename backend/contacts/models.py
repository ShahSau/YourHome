from django.db import models
from datetime import datetime

# name, email and subject are compulsory
class Contact(models.Model):
    name = models.CharField(max_length=200)
    email = models.CharField(max_length=100)
    phone = models.IntegerField(default=123456,blank=True)
    city = models.CharField(max_length=100,blank=True)
    property = models.CharField(max_length=100,blank=True)
    subject = models.CharField(max_length=100)
    message = models.TextField(blank=True)
    contact_date = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.email


