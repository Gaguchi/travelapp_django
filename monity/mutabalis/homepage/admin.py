from django.contrib import admin
from .models import Project, Service, Step

class ServiceInline(admin.TabularInline):
    model = Service

class StepInline(admin.TabularInline):
    model = Step

class ProjectAdmin(admin.ModelAdmin):
    inlines = [ServiceInline, StepInline]

admin.site.register(Project, ProjectAdmin)
