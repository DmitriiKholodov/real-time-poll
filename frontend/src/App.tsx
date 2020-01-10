import React, { useState } from "react";
import './App.css';
import io from 'socket.io-client';


const App: React.FC = () => {

  const socket = null;
  const connect = (host: string) => {
    const socket = io(host);
    console.log(socket)
  };


  return (
    <div className="App">
      <h1>Pollminator 9000</h1>
      <button onClick={() => connect('localhost:4000')}>Connect to room</button>
    </div>
  );
};

export default App;
