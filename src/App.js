import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const PRIZE_API = "/prize.json";

function App() {

  // Create a state variable to hold prize data

  // Get the cards from the PRIZE_API endpoint and put them into the state variable you created above
  useEffect(() => {
    fetch(PRIZE_API).then(resp => resp.json()).then(console.log)
  }, [])

  return (
    <div className="App">
      <h3>Nobel Prizes</h3>
      { /* For each of the prizes you get back from the API, render a new prize component */}
    </div>
  );
}

export default App;
