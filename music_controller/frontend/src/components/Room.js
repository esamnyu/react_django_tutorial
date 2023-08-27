import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Room(props) {
    const [votesToSkip, setVotesToSkip] = useState(2);
    const [guestCanPause, setGuestCanPause] = useState(false);
    const [isHost, setIsHost] = useState(false);

    const { roomCode } = useParams();

    useEffect(() => {
        console.log("Fetching room data for:", roomCode); 

        fetch("/api/room/" + roomCode + "/")
            .then((response) => {
                if (!response.ok) {
                    console.log("Error fetching room data:", response.statusText); 
                    return;
                }
                return response.json();
            })
            .then((data) => {
                console.log("Received room data:", data);

                setVotesToSkip(data.votes_to_skip);
                setGuestCanPause(data.guest_can_pause);
                setIsHost(data.is_host);
            });
    }, [roomCode]);

    console.log("Rendering Room component with data:", votesToSkip, guestCanPause, isHost); 

    return (
        <div>
            <h3>Room Code: {roomCode}</h3>
            <p>Votes: {votesToSkip}</p>
            <p>Guest Can Pause: {String(guestCanPause)}</p>
            <p>Host: {String(isHost)}</p>
        </div>
    );
}

export default Room;
