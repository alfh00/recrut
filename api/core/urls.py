from django.urls import path
from .views import CustomRefreshTokenView, CustomTokenObtainPairView, RegisterView,  LogoutView

urlpatterns = [

    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),  # You can still use SimpleJWT's default view for access token
    path('token/refresh/', CustomRefreshTokenView.as_view(), name='token_refresh'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('register/', RegisterView.as_view(), name='register'),
    # path('hello/', hello_world, name='hello'),

]