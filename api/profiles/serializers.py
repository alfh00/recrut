from rest_framework import serializers
from .models import CandidateProfile, Skill, Experience, Education

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ['id', 'name', 'years']

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = ['id', 'title', 'date', 'description']

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ['id', 'diploma', 'date', 'description']

class CandidateProfileSerializer(serializers.ModelSerializer):
    skills = SkillSerializer(many=True)
    experiences = ExperienceSerializer(many=True)
    education = EducationSerializer(many=True)

    class Meta:
        model = CandidateProfile
        fields = ['id', 'user', 'desired_position', 'min_salary', 'max_salary', 'experience_years', 'skills', 'experiences', 'education']
        read_only_fields = ['user']

    def create(self, validated_data):
        skills_data = validated_data.pop('skills')
        experiences_data = validated_data.pop('experiences')
        education_data = validated_data.pop('education')
        profile = CandidateProfile.objects.create(**validated_data)

        for skill_data in skills_data:
            Skill.objects.create(profile=profile, **skill_data)

        for experience_data in experiences_data:
            Experience.objects.create(profile=profile, **experience_data)

        for education_data in education_data:
            Education.objects.create(profile=profile, **education_data)

        return profile

    def update(self, instance, validated_data):
        skills_data = validated_data.pop('skills', [])
        experiences_data = validated_data.pop('experiences', [])
        education_data = validated_data.pop('education', [])

        # Update main profile fields
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        # Update skills
        instance.skills.all().delete()
        for skill_data in skills_data:
            Skill.objects.create(profile=instance, **skill_data)

        # Update experiences
        instance.experiences.all().delete()
        for experience_data in experiences_data:
            Experience.objects.create(profile=instance, **experience_data)

        # Update education
        instance.education.all().delete()
        for education_data in education_data:
            Education.objects.create(profile=instance, **education_data)

        return instance
