from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.views.generic import ListView, CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from django.db.models import Q
from .models import Member, MembershipType, Membership, Payment
from .forms import MemberForm, MembershipForm, PaymentForm

@login_required
def dashboard(request):
    if not request.user.is_gym_owner:
        return redirect('login')
    
    total_members = Member.objects.count()
    active_memberships = Membership.objects.filter(is_active=True).count()
    recent_members = Member.objects.order_by('-join_date')[:5]
    
    context = {
        'total_members': total_members,
        'active_memberships': active_memberships,
        'recent_members': recent_members,
    }
    return render(request, 'members/dashboard.html', context)

class MemberListView(LoginRequiredMixin, UserPassesTestMixin, ListView):
    model = Member
    template_name = 'members/member_list.html'
    context_object_name = 'members'
    paginate_by = 10

    def test_func(self):
        return self.request.user.is_gym_owner

    def get_queryset(self):
        query = self.request.GET.get('q')
        if query:
            return Member.objects.filter(
                Q(first_name__icontains=query) |
                Q(last_name__icontains=query) |
                Q(phone__icontains=query) |
                Q(email__icontains=query)
            )
        return Member.objects.all()

class MemberCreateView(LoginRequiredMixin, UserPassesTestMixin, CreateView):
    model = Member
    form_class = MemberForm
    template_name = 'members/member_form.html'
    success_url = reverse_lazy('member-list')

    def test_func(self):
        return self.request.user.is_gym_owner

class MemberUpdateView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = Member
    form_class = MemberForm
    template_name = 'members/member_form.html'
    success_url = reverse_lazy('member-list')

    def test_func(self):
        return self.request.user.is_gym_owner

class MemberDeleteView(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
    model = Member
    template_name = 'members/member_confirm_delete.html'
    success_url = reverse_lazy('member-list')

    def test_func(self):
        return self.request.user.is_gym_owner

class MembershipCreateView(LoginRequiredMixin, UserPassesTestMixin, CreateView):
    model = Membership
    form_class = MembershipForm
    template_name = 'members/membership_form.html'

    def test_func(self):
        return self.request.user.is_gym_owner

    def get_success_url(self):
        return reverse_lazy('member-detail', kwargs={'pk': self.object.member.pk})

class PaymentCreateView(LoginRequiredMixin, UserPassesTestMixin, CreateView):
    model = Payment
    form_class = PaymentForm
    template_name = 'members/payment_form.html'

    def test_func(self):
        return self.request.user.is_gym_owner

    def get_success_url(self):
        return reverse_lazy('member-detail', kwargs={'pk': self.object.member.pk})

def check_membership_expiry():
    # This will be a Celery periodic task
    expiring_memberships = Membership.objects.filter(
        end_date__lte=timezone.now().date() + timedelta(days=7),
        is_active=True
    )
    
    for membership in expiring_memberships:
        send_mail(
            'Your Gym Membership is Expiring Soon',
            f'Dear {membership.member.first_name},\n\nYour {membership.membership_type.name} membership will expire on {membership.end_date}. Please renew to continue enjoying our services.\n\nBest regards,\nThe Gym Team',
            settings.DEFAULT_FROM_EMAIL,
            [membership.member.email],
            fail_silently=False,
        )
