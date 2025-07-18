from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import User, Member, MembershipType, Membership, Payment
from django.contrib.auth.admin import UserAdmin

class CustomUserAdmin(UserAdmin):
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_gym_owner')
    list_filter = ('is_gym_owner',)
    fieldsets = UserAdmin.fieldsets + (
        ('Gym Owner Status', {'fields': ('is_gym_owner',)}),
    )

class MemberAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'phone', 'email', 'join_date')
    search_fields = ('first_name', 'last_name', 'phone', 'email')
    list_filter = ('join_date',)

class MembershipAdmin(admin.ModelAdmin):
    list_display = ('member', 'membership_type', 'start_date', 'end_date', 'is_active')
    search_fields = ('member__first_name', 'member__last_name', 'member__phone')
    list_filter = ('membership_type', 'is_active', 'start_date', 'end_date')

class PaymentAdmin(admin.ModelAdmin):
    list_display = ('member', 'amount', 'payment_date', 'payment_method', 'status')
    search_fields = ('member__first_name', 'member__last_name', 'transaction_id')
    list_filter = ('payment_method', 'status', 'payment_date')

admin.site.register(User, CustomUserAdmin)
admin.site.register(Member, MemberAdmin)
admin.site.register(MembershipType)
admin.site.register(Membership, MembershipAdmin)
admin.site.register(Payment, PaymentAdmin)