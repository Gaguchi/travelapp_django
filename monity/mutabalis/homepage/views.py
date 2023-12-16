from django.shortcuts import render

def home(request):
    return render(request, 'homepage/home.html')

def projects(request):
    return render(request, 'homepage/projects.html')

# Create your views here.
