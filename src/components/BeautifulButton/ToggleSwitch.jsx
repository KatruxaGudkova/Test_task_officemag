import './ToggleSwitch.css';
import { useState } from 'react';

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);
  
  return (
    <label className={`toggle-switch ${isOn ? 'toggle-switch--on' : ''}`}>
      <input 
        type="checkbox" 
        checked={isOn}
        onChange={() => setIsOn(!isOn)}
      />
      <span className="toggle-track">
        <span className="toggle-knob"></span>
      </span>
    </label>
  );
}

export default ToggleSwitch