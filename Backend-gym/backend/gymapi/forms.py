from django import forms
from .models import Member

class MemberForm(forms.ModelForm):
    class Meta:
        model = Member
        fields = '__all__'  # or list specific fields, e.g. ['name', 'email', 'membership_type']