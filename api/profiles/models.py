from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class CandidateProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    desired_position = models.CharField(max_length=255)
    min_salary = models.DecimalField(max_digits=10, decimal_places=2)
    max_salary = models.DecimalField(max_digits=10, decimal_places=2)
    experience_years = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.user.username}'s Profile"

class Skill(models.Model):
    profile = models.ForeignKey(CandidateProfile, on_delete=models.CASCADE, related_name='skills')
    name = models.CharField(max_length=100)
    years = models.PositiveIntegerField(default=0)

class Experience(models.Model):
    profile = models.ForeignKey(CandidateProfile, on_delete=models.CASCADE, related_name='experiences')
    title = models.CharField(max_length=255)
    date = models.DateField()
    description = models.TextField()

class Education(models.Model):
    profile = models.ForeignKey(CandidateProfile, on_delete=models.CASCADE, related_name='education')
    diploma = models.CharField(max_length=255)
    date = models.DateField()
    description = models.TextField()
