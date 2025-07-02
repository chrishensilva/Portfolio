// Dropdown.jsx
import { useState } from 'react';


function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select Project Type");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={toggleDropdown}>
        {selected}
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <div onClick={() => handleSelect("Video")}>Video editing</div>
          <div onClick={() => handleSelect("Graphic")}>Graphic Designing</div>
          <div onClick={() => handleSelect("3D")}>3D Rendering</div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
