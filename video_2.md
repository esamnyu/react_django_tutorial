# Full Stack Web App in Python with Django and React: Part 2

## API View Setup

Establishing an API view distinct from the standard HTML view is a key component of our full stack application. In this part, I'll outline the distinctions and the reasoning behind it.

### Purpose of API View

The backend of our application serves an essential role by providing an overview of all rooms in our database in real-time. In essence, the backend:

- Manages data,
- Processes requests, and
- Delivers appropriate responses.

For our frontend to function effectively, especially when accessing or validating rooms, it references the backend. For instance, if a user wishes to join a room, the system must verify the room's presence in the backend. This requires an endpoint that supplies room data in a readable format.

### Data Format

Contrary to serving data as HTML, serving data in the **JSON format** is more suitable for our application. This format:

- Uses key-value pairs, and
- Allows the frontend to process and handle the data effortlessly.

### Serializer Class

Transitioning further, let's discuss the **serializer class**. This class is essential as it aids in converting our Python-based room model into a JSON response.

#### Creating the Serializer

Consider the following as a fundamental guide:

```python
from rest_framework import serializers
from .models import room

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = room
        fields = ['ID', 'code', 'host', 'guests_can_pause', 'votes_to_skip', 'created_at']
```
Do note that every model possesses an inherent primary key, usually a distinct integer. This key is automatically assigned with every new room addition to our database. Thus, we include the 'ID' field, even though it's not explicitly mentioned.

API View Setup
With the Room Serializer in place, our next task is to establish the API view. This view will exhibit a list of rooms.

```
from rest_framework import generics
from .models import Room
from .serializers import RoomSerializer

class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
```
URL Linking
For operational purposes, we must associate our URL to the view:
```
from .views import RoomView

# ... existing code ...

urlpatterns = [
    # ... other routes ...
    path('api/room/', RoomView.as_view(), name='room-api-view'),
]
```
Upon configuration, your server will present a structured interface that displays the details of each room. And with ListAPIView, it will showcase a list of all existing rooms in the database.
