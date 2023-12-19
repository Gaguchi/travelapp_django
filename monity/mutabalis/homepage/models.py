from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=100)
    short_description = models.TextField()
    description = models.TextField()
    how_we_work = models.TextField()
    banner_image = models.ImageField(upload_to='homepage/static/homepage/img/content/', null=True)
    main_image = models.ImageField(upload_to='homepage/static/homepage/img/content/', null=True)
    secondary_image = models.ImageField(upload_to='homepage/static/homepage/img/content/', null=True)

    def __str__(self):
        return self.title


class Service(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)  # Add ForeignKey field
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='homepage/static/homepage/img/content/', null=True)

    def __str__(self):
        return self.title


class Step(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    number = models.IntegerField()
    description = models.TextField()
    # Add other fields as needed

    def __str__(self):
        return f"Step {self.number} of {self.project.title}"
