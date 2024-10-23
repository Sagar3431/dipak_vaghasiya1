"""
URL configuration for ocustion project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from app import views

urlpatterns=[
    path('admin/', admin.site.urls),
]

urlpatterns = [
    path('',views.home,name='home'),
    path('login/', views.login, name='login'),
    path('register/', views.register, name='register'),
    path('customer-register/', views.customer_register, name='customer-register'),
    path('profile/', views.profile, name='profile'),
    path('profile/', views.profile, name='c_profile'),
    path("logout/",views.logout,name="logout"),
    path("c-profile-password/",views.c_profile_password,name='c_profile_password'),
    path("c-profile-update/",views.c_profile_update,name='c_profile_update'),
    path('manager-profile-update/',views.m_profile_update,name="m_profile_update"),
    path("all-event",views.All_event,name="all_event"),
    path("my-event",views.my_event,name="my_event"),
    path("add-media",views.add_event,name="add_event"),
    path("my_all_video",views.my_all_video,name="my_all_video"),
    path("video-gallery-my",views.video_gallery_my,name="video_gallery_my"),
    path("view-event-request",views.event_request,name="view_event_request"),
    path("approve-event-request/<int:pk>",views.approve_event_request,name="approve_event_request"),
    path("reject-event-request/<int:pk>",views.reject_event_request,name="reject_event_request"),
    path("forgot-password",views.forgot_password,name="forgot_password"),
    path("reset-password",views.reset_password,name="reset_password"),
    
    # customer
    path("c-all-event",views.c_All_event,name="c_all_event"),
    path("c-my-event",views.c_my_event,name="c_my_event"),
    path("c_my_all_video",views.c_my_all_video,name="c_my_all_video"),
    path("c_video-gallery-my",views.c_video_gallery_my,name="c_video_gallery_my"),
    path("c-add-media",views.c_add_event,name="c_add_event"),
    path("all-managers",views.all_managers,name="all_managers"),
    path("specific-view-managers/<int:pk>",views.specific_view_managers,name="specific-view-managers"),
    path("Book-event-request/<int:pk>",views.book_event_request,name="book_event_request"),
    path("book-event-request-logic",views.book_event_request_logic,name="book_event_request_logic"),
    path("give-review/<int:pk>",views.give_review,name="give_rieview"),
    path("give-review-logic",views.give_review_logic,name="give_review_logic"),
    path("all-review",views.all_review,name="all_rieview"),
    path("c-my-review",views.c_my_review,name="c_my_review"),

    
    
]
