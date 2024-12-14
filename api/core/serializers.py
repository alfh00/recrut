from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken

CustomUser = get_user_model()


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'first_name', 'last_name', 'is_recruter']  # Include fields you want to expose

class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ['email', 'first_name', 'last_name', 'is_recruter', 'password']

    def create(self, validated_data):
        # Create the user with hashed password
        user = CustomUser.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            is_recruter=validated_data.get('is_recruter', False)
        )
        return user

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    # Custom token serializer to include user data
    def validate(self, attrs):

        data = super().validate(attrs)

        user = self.user
        print(user)
        data['user'] = CustomUserSerializer(user).data
        return data