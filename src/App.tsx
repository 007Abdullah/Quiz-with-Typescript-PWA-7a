import React, { useEffect } from 'react';
import './App.css';
import { InitNotification } from './services/FirebaseService';


function App() {

  useEffect(() => {
    InitNotification();
  }, [])

  return (
    <React.Fragment>
      <div className="App">

      </div>
    </React.Fragment>
  );
}

export default App;
