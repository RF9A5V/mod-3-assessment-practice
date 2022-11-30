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

  const [dropdownActive, setDropdown] = useState(false);

  // Note, you'll have to move some of this content to the PrizeContainer when we bring in routing
  // We should be able to go to /prizes/chemistry to find all the Nobel Prize winners for chemistry, as an example.

  return (
    <div className="App">
      <nav>
        <h4>Nobel</h4>
        <div className="dropdown-container">
          <span onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
            Categories
          </span>
          {
            dropdownActive ? (
              <ul className="dropdown">
                { /* Should have a link to each of the prize categories */ }
                <li>Test Entry</li>
                <li>Test Entry</li>
                <li>Test Entry</li>
                <li>Test Entry</li>
              </ul>
            ) : (
              null
            )
          }
          
        </div>
      </nav>
      <h3>Nobel Prizes</h3>
      { /* Should have a dropdown that lets you filter prizes based on the year */ }
      { /* For each of the prizes you get back from the API, render a new prize component */}
    </div>
  );
}

export default App;
