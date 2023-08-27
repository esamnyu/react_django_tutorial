from django.urls import path
from .views import GetRoomView, RoomView, CreateRoomView

urlpatterns = [
    path('rooms/', RoomView.as_view(), name='room-list'),
    path('create-room/', CreateRoomView.as_view(), name='create-room'),
    path('room/<str:code>/', GetRoomView.as_view(), name='get-room-by-code')
]
