from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import Message

@login_required
def chat_room(request, username):
    messages = Message.objects.filter(user__username=username).order_by('timestamp')
    return render(request, 'chat/chat_room.html', {'messages': messages, 'username': username})
