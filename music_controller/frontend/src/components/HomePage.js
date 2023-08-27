import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class HomePage extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to="/">Home</Link> | 
                    <Link to="/join">Join Room</Link> | 
                    <Link to="/create">Create Room</Link>

                </div>
                <Routes>
                    <Route path='/' element={<p> This is the home page </p>} />
                    <Route path='/join' element={<RoomJoinPage />} />
                    <Route path='/create' element={<CreateRoomPage />} />
                    <Route path='/room/:roomCode' element={<Room />} />
                </Routes>
            </Router>
        );
    }
}
