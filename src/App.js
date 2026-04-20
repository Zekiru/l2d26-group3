import logo from './logo.svg';
import './App.css';

import React from 'react';
import MeetTheTeam from './components/MeetTheTeam';

function App() {
  return (
    <div className="App">
      {/* This renders your entire page component. 
        Everything you built in MeetTheTeam.js (the cards, the photos, the footer) 
        will now show up when you run 'npm start'.
      */}
      <MeetTheTeam />
    </div>
  );
}

export default App;
