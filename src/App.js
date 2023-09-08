import './Components/Dropdown/style.css';
import './Components/Card/style.css';
import Dropdown from './Components/Dropdown/dropdown.js';
import Card from './Components/Card/index.js';
import { useState } from 'react';

function App() {
  const[selected,setSelected]=useState("");
  return (
    <div className="App">
    <Dropdown selected={selected} setSelected={setSelected}/>
    <Card/>
    </div>
  );
}

export default App;
