
import './App.css';
import io from 'socket.io-client';
import React, { useEffect } from 'react';


function App() {



  const ENDPOINT = "https://nodenftpassserver.onrender.com:5050/";


  useEffect(() => {


 fetch(ENDPOINT)
      .then(response => response.text())
      .then(data => console.log('Server response:', data))
      .catch(error => console.error('Error:', error));

      
    const socket = io(ENDPOINT);
    console.log(socket)
    socket.emit("check", { data: 'Hello, server!' });
    console.log("trying" )
   
    socket.on('serverEvent', (data) => {
      console.log('Received message from server:', data);
    });




    return () => {
      socket.disconnect();
    };
  }, []);

 


  
  return (
    <div className="App">
      <header className="App-header">
  
        <p>
          
        </p>
       
      </header>
    </div>
  );
}

export default App;
