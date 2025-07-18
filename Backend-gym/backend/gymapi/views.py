from django.shortcuts import render, redirect
from .forms import MemberForm
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def home_api(request):
    return Response({"message": "Welcome to Gym Backend!"})

def add_member(request):
    if request.method == 'POST':
        form = MemberForm(request.POST)
        if form.is_valid():
            form.save()  # ✅ Data goes into PostgreSQL
            return redirect('member-success')  # Redirect to success page
    else:
        form = MemberForm()

    return render(request, 'add_member.html', {'form': form})
