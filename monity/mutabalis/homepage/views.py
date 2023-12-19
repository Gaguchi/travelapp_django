from django.shortcuts import render, get_object_or_404
from .models import Project
from django.http import JsonResponse

def index(request):
    projects = Project.objects.all()
    return render(request, 'homepage/home.html', {'projects': projects})

def projects(request):
    projects = Project.objects.all()
    project_list = list(projects.values())  # Convert QuerySet to list of dicts
    return JsonResponse(project_list, safe=False)

def project_detail(request, project_id):
    project = get_object_or_404(Project, id=project_id)
    project_data = {
        'id': project.id,
        'name': project.title,
        # Add more fields as needed
    }
    return JsonResponse(project_data)

def projects_home(request):
    return render(request, 'homepage/projects.html')