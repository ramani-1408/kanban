import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';

function Dropdown({ selected, setselected }) {
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="Dropdown">
      <div className="Dropdown-btn" onClick={() => setIsActive(!isActive)}>
        Display
        <i className={`fa ${isActive ? 'fa-caret-up' : 'fa-caret-down'}`}></i>
      </div>
      {isActive && (
        <div className="Dropdown-content">
          <div className="Dropdown-item">Grouping-----------       
          <select id="myList" onChange={handleSelectChange} value={selectedOption}>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
          </div>
          <div className="Dropdown-item">Ordering------------
          <select id="myList" onChange={handleSelectChange} value={selectedOption}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
