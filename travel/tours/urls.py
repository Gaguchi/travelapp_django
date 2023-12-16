from django.urls import path
from . import views

urlpatterns = [
    path('', views.tour_list, name='tour_list'),
    path('book/<int:tour_id>/', views.book_tour, name='book_tour'),
    path('home', views.tour_list, name='home'),
    path('login/', views.login_request, name='login'),
    path('logout/', views.logout_request, name='logout'),
    path('register/', views.register, name='register'),
]
