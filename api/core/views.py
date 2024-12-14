# views.py
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .serializers import CustomTokenObtainPairSerializer, UserRegistrationSerializer
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken

class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)

            response = Response({
                'msg': 'Registration successful',
                'access_token': access_token,
                'refresh_token': str(refresh),
                'user': serializer.data,
            }, status=201)
            return response
        return Response(serializer.errors, status=400)

class CustomTokenObtainPairView(TokenObtainPairView):
    permission_classes = [AllowAny]
    serializer_class = CustomTokenObtainPairSerializer

class CustomRefreshTokenView(TokenRefreshView):
    permission_classes = [AllowAny]


class LogoutView(APIView):
    def post(self, request):
        response = Response({"msg": "Logged out successfully"}, status=200)
        response.delete_cookie('access_token', path='/')
        response.delete_cookie('refresh_token', path='/')
        return response
