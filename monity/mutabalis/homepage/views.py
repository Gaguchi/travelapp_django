from django.shortcuts import render, get_object_or_404
from .models import Project, Service, Step
from django.http import JsonResponse

def index(request):
    projects = Project.objects.all()
    return render(request, 'homepage/home.html', {'projects': projects})

def projects(request):
    projects = Project.objects.all()
    project_list = list(projects.values())  # Convert QuerySet to list of dicts
    return JsonResponse(project_list, safe=False)

def projects_home(request, project_id):
    return render(request, 'homepage/projects.html', {'active_project_id': project_id})

def project_detail(request, project_id):
    project = get_object_or_404(Project, id=project_id)
    services = Service.objects.filter(project=project)
    steps = Step.objects.filter(project=project)

    service_data = []
    for service in services:
        service_data.append({
            'id': service.id,
            'title': service.title,
            'description': service.description,
            'image': service.image.url if service.image else None,
        })

    step_data = []
    for step in steps:
        step_data.append({
            'number': step.number,
            'description': step.description,
        })

    project_data = {
        'id': project.id,
        'title': project.title,
        'short_description': project.short_description,
        'description': project.description,
        'how_we_work': project.how_we_work,
        'banner_image': project.banner_image.url if project.banner_image else None,
        'main_image': project.main_image.url if project.main_image else None,
        'secondary_image': project.secondary_image.url if project.secondary_image else None,
        'services': service_data,
        'steps': step_data,
    }
    return JsonResponse(project_data)