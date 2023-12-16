from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    services = models.CharField(max_length=200)
    how_we_work = models.TextField()
    steps = models.TextField()

    def __str__(self):
        return self.title
