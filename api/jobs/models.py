from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class JobCategory(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class Company(models.Model):
    name = models.CharField(max_length=255, unique=True)
    website = models.URLField(blank=True, null=True)
    location = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    # logo = models.ImageField(upload_to='company_logos/', blank=True, null=True)
    created_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='companies')

    def __str__(self):
        return self.name

class Job(models.Model):

    JOB_TYPE_CHOICES = [
        ('FULL_TIME', 'Full-time'),
        ('PART_TIME', 'Part-time'),
        ('INTERNSHIP', 'Internship'),
        ('FREELANCE', 'Freelance'),
    ]

    STATUS_CHOICES = [
        ('OPEN', 'Open'),
        ('CLOSED', 'Closed'),
        ('FILLED', 'Filled'),
    ]

    title = models.CharField(max_length=255)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='jobs')
    category = models.ForeignKey(JobCategory, on_delete=models.SET_NULL, null=True, related_name='jobs')
    description = models.TextField()
    requirements = models.TextField()
    location = models.CharField(max_length=255)
    remote_available = models.BooleanField(default=False)
    job_type = models.CharField(max_length=20, choices=JOB_TYPE_CHOICES)
    salary_min = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    salary_max = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    posted_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posted_jobs')
    posted_on = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='OPEN')


    def __str__(self):
        return f"{self.title} at {self.company.name}"

    class Meta:
        ordering = ['-posted_on']
