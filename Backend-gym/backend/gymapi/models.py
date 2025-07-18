from django.db import models

class Member(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    contact = models.CharField(max_length=15)
    membership_type = models.CharField(max_length=50)
    payment_mode = models.CharField(max_length=50)

    def __str__(self):
        return self.name