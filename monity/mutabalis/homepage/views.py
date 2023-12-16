from django.shortcuts import render
from .models import Project

def index(request):
    return render(request, 'homepage/home.html')

def projects(request):
    projects = Project.objects.all()
    return render(request, 'homepage/projects.html', {'projects': projects})

# Create your views here.
