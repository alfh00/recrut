from rest_framework import viewsets, status, mixins
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import action
from django.shortcuts import get_object_or_404
from .models import CandidateProfile
from .serializers import *

class CandidateProfileViewSet(mixins.CreateModelMixin,
                             mixins.UpdateModelMixin,
                             mixins.DestroyModelMixin,
                             viewsets.GenericViewSet):
    serializer_class = CandidateProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        """
        Get the user's profile, or return 404 if it doesn't exist
        """
        return get_object_or_404(CandidateProfile, user=self.request.user)

    def list(self, request):
        """
        GET /api/profile/
        Get the current user's profile
        """
        try:
            profile = self.get_object()
            serializer = self.get_serializer(profile)
            return Response(serializer.data)
        except:
            return Response(
                {"detail": "Profile not found."},
                status=status.HTTP_404_NOT_FOUND
            )

    def create(self, request):
        """
        POST /api/profile/
        Create a profile for the current user
        """
        if CandidateProfile.objects.filter(user=request.user).exists():
            return Response(
                {"detail": "Profile already exists. Use PUT to update."},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def put(self, request, *args, **kwargs):
        """
        PUT /api/profile/
        Update the current user's profile or create if it doesn't exist
        """
        try:
            instance = self.get_object()
            serializer = self.get_serializer(instance, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)
        except:
            # Profile doesn't exist, create it
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

    def patch(self, request, *args, **kwargs):
        """
        PATCH /api/profile/
        Partially update the current user's profile
        """
        return self.partial_update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        """
        DELETE /api/profile/
        Delete the current user's profile
        """
        return self.destroy(request, *args, **kwargs)

    @action(detail=False, methods=['get'])
    def skills(self, request):
        """
        GET /api/profile/skills/
        Get skills for the current user's profile
        """
        profile = self.get_object()
        serializer = SkillSerializer(profile.skills.all(), many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def experiences(self, request):
        """
        GET /api/profile/experiences/
        Get experiences for the current user's profile
        """
        profile = self.get_object()
        serializer = ExperienceSerializer(profile.experiences.all(), many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def education(self, request):
        """
        GET /api/profile/education/
        Get education entries for the current user's profile
        """
        profile = self.get_object()
        serializer = EducationSerializer(profile.education.all(), many=True)
        return Response(serializer.data)
