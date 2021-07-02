import React, { useEffect } from 'react';
import './App.css';
import { InitNotification } from './services/FirebaseService';


function App() {

  useEffect(() => {
    InitNotification();
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
