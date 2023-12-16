from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    how_we_work = models.TextField()

    def __str__(self):
        return self.title


class Service(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)  # Add ForeignKey field
    title = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.title


class Step(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    number = models.IntegerField()
    description = models.TextField()
    # Add other fields as needed

    def __str__(self):
        return f"Step {self.number} of {self.project.title}"
