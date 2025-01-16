from django.urls import path
from . import views

urlpatterns = [
    path('<str:username>/', views.chat_room, name='chat_room'),
]
