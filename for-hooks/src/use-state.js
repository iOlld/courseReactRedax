import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <HookSwitcher />
    </div>
  )
};

const HookSwitcher = () => {

  const [ color, setColor ] = useState('white');
  const [ fontSize, setFontSize ] = useState(14)

  return (
    <div style={{ padding: '10px', backgroundColor: color, fontSize: `${fontSize}px` }}>
      Hi man <br/>
      <button 
        onClick={() => setColor('black')}>
        Dark
      </button>
      <button 
        onClick={() => setColor('grey')}>
        Light
      </button>
      <button 
        onClick={() => setColor('red')}>
        Red
      </button>
      <button
        onClick={() => setFontSize( (size) => size + 3 )}>
        +
      </button>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
