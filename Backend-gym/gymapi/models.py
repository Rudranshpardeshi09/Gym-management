from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.mail import send_mail
from django.conf import settings
from django.utils import timezone
from datetime import timedelta

class User(AbstractUser):
    is_gym_owner = models.BooleanField(default=False)

class MembershipType(models.Model):
    name = models.CharField(max_length=50)  # Monthly, 3 Months, etc.
    duration_days = models.IntegerField()  # 30, 90, 180, 365
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name

class Member(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    email = models.EmailField()
    join_date = models.DateField(auto_now_add=True)
    profile_picture = models.ImageField(upload_to='member_profiles/', null=True, blank=True)
    address = models.TextField(null=True, blank=True)
    emergency_contact = models.CharField(max_length=15, null=True, blank=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class Membership(models.Model):
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    membership_type = models.ForeignKey(MembershipType, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    is_active = models.BooleanField(default=True)
    auto_renew = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        # Calculate end date based on membership type duration
        if not self.end_date and self.membership_type:
            self.end_date = self.start_date + timedelta(days=self.membership_type.duration_days)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.member} - {self.membership_type}"

class Payment(models.Model):
    PAYMENT_STATUS = [
        ('pending', 'Pending'),
        ('completed', 'Completed'),
        ('failed', 'Failed'),
    ]

    PAYMENT_METHOD = [
        ('cash', 'Cash'),
        ('card', 'Credit/Debit Card'),
        ('upi', 'UPI'),
        ('netbanking', 'Net Banking'),
    ]

    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    membership = models.ForeignKey(Membership, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_date = models.DateTimeField(auto_now_add=True)
    payment_method = models.CharField(max_length=20, choices=PAYMENT_METHOD)
    status = models.CharField(max_length=20, choices=PAYMENT_STATUS, default='completed')
    transaction_id = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return f"{self.member} - {self.amount}"