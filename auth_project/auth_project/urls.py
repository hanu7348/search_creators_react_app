from django.contrib import admin
from django.urls import path
from auth_app.views import RegisterView, LoginView, ContactView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/register/', RegisterView.as_view(), name='register'),
    path('api/login/', LoginView.as_view(), name='login'),
    path('api/contact/', ContactView.as_view(), name='contact'),
]