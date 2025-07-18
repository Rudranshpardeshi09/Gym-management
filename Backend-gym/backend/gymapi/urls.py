from django.urls import path
from .views import home_api

urlpatterns = [
     path('add/', views.add_member, name='add-member'),
    path('success/', lambda r: render(r, 'success.html'), name='member-success'),
]
