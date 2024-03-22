import React, {useState} from 'react';

export default function App () {
  const [drink, setDrink] = useState("");

  return (
      <React.Fragment>
        <h1>Drink Vending Machine</h1>
        <div className="display">
          {drink}
        </div>
        <button onClick={() => {setDrink("Dispensing Coffee")}}>Coffee</button>
        <button onClick={() => {setDrink("Dispensing Tea")}}>Tea</button>
        <button onClick={() => {setDrink("Dispensing Orange Juice")}}>Orange Juice</button>
      </React.Fragment>
    );
  
}


