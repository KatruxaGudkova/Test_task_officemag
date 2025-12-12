import './BeautifulButton.css';
import { useState } from 'react';

function BeautifulButton() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button 
      className={`beautiful-button ${isHovered ? 'beautiful-button--hover' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="beautiful-button-shadow"></span>
      <span className="beautiful-button-text">Кнопка</span>
    </button>
  );
}

export default BeautifulButton