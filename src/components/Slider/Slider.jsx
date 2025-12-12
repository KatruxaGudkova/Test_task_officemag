import './Slider.css';
function Slider() {
  const items = [
    { id: 1, title: 'Набор настольный BESTAR «Amenhotep» из дерева, 8 предметов, двойной лоток, светлая вишня' },
    { id: 2, title: 'Набор настольный BESTAR «Charon» из дерева, 7 предметов, двойной лоток, красное дерево' },
    { id: 3, title: 'Набор настольный BESTAR «Charon» из дерева, 7 предметов, двойной лоток, орех' },
    { id: 4, title: 'Набор настольный BESTAR «Hercules» из дерева, 5 предметов, двойной лоток, красное дерево' },
    { id: 5, title: 'Набор настольный BESTAR «Hercules» из дерева, 5 предметов, двойной лоток, орех' },
  ];
  
  return (
    <div className="slider-component">
      <h2>Витрина</h2>
      <div className="slider-wrapper">
        <div className="slider-items">
          {items.map(item => (
            <div key={item.id} className="slider-item">
              <div className="slider-item-image"></div>
              <h3 className="slider-item-title">{item.title}</h3>
              <div className="slider-item-progress">
                <div className="progress-bar" style={{width: `${(item.id * 20)}%`}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="slider-scrollbar">
        <div className="scrollbar-thumb"></div>
      </div>
    </div>
  );
}

export default Slider