import React from 'react';
import '../../assets/style/components/sections/GlobalClients.css';

const GlobalClients = () => {
  const data = [
    ["Alabama", "Idaho", "Mississippi", "Oklahoma", "West Virginia", "Ireland"],
    ["Alaska", "IllinoisIndiana", "Missouri", "Oregon", "Wisconsin", "Italy"],
    ["Arizona", "Iowa", "MontanaNebraska", "Pen Rhode Island", "Wyoming", "Luxembourg"],
    ["Arkansas", "Kansas", "Nevada", "South Carolina", "Europe", "Netherlands"],
    ["California", "Kentucky", "New Hampshire", "South Dakota", "", "Sweden"],
    ["Colorado", "Louisiana", "New Jersey", "Tennessee", "Belgium", ""],
    ["Connecticut", "Maine", "New Mexico", "Texas", "Austria", "Global"],
    ["Delaware", "Maryland", "New York", "Utah", "Denmark", "Saudia Arabia"],
    ["Florida", "Massachusetts", "North Carolina", "Vermont", "Finland", "UAE"],
    ["Georgia", "Michigan", "North Dakota", "Virginia", "France", "China"],
    ["Hawaii", "Minnesota", "Ohio", "Washington", "Germany", "Qatar"]
  ];

  return (
<div className='globalContent'>
<h1>Global Clientele and Presence</h1>
        <h3>United States</h3>
<div className="GlobalClients">
        
      {data.map((row, rowIndex) => (
        row.map((cell, cellIndex) => (
          <div key={`${rowIndex}-${cellIndex}`} className="grid-item">
            {cell}
          </div>
        ))
      ))}
    </div>
</div>
    
  );
};

export default GlobalClients;