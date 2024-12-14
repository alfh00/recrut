from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CandidateProfileViewSet

router = DefaultRouter()
router.register(r'profile', CandidateProfileViewSet, basename='profile')

urlpatterns = [
    path('', include(router.urls)),
]
