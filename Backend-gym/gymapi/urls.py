from django.urls import path
from .views import home_api

from django.urls import path
from .views import (
    dashboard, MemberListView, MemberCreateView, 
    MemberUpdateView, MemberDeleteView, MembershipCreateView,
    PaymentCreateView
)

urlpatterns = [
    path('', dashboard, name='dashboard'),
    path('members/', MemberListView.as_view(), name='member-list'),
    path('members/add/', MemberCreateView.as_view(), name='member-add'),
    path('members/<int:pk>/edit/', MemberUpdateView.as_view(), name='member-edit'),
    path('members/<int:pk>/delete/', MemberDeleteView.as_view(), name='member-delete'),
    path('memberships/add/', MembershipCreateView.as_view(), name='membership-add'),
    path('payments/add/', PaymentCreateView.as_view(), name='payment-add'),
]