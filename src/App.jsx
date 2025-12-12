import { useState } from 'react';
import './App.css';
import Text from './components/Text/Text.jsx';
import Form from './components/Form/Form.jsx';
import Buttons from './components/Buttons/Buttons.jsx';
import Scheme from './components/Scheme/Scheme.jsx';
import Slider from './components/Slider/Slider.jsx';
import BlackPage from './components/BlackPage/BlackPage.jsx';
import BeautifulButton from './components/BeautifulButton/BeautifulButton.jsx';
import ToggleSwitch from './components/BeautifulButton/ToggleSwitch.jsx';

function App() {
  const [activeTab, setActiveTab] = useState('text');
  
  const tabs = [
    { id: 'text', label: 'Текст' },
    { id: 'form', label: 'Форма' },
    { id: 'buttons', label: 'Кнопки' },
    { id: 'scheme', label: 'Схема' },
    { id: 'slider', label: 'Витрина' },
    { id: 'blackpage', label: 'Чёрная страница' },
    { id: 'beautiful', label: 'Красота' },
  ];
  
  return (
    <div className="app">
      <header className="app-header">
        <h1>Тестовые задания 1.0.1</h1>
        <nav className="app-nav">
          {tabs.map(tab => (
            <button 
              key={tab.id}
              className={`nav-tab ${activeTab === tab.id ? 'nav-tab--active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>
      
      <main className="app-main">
        {activeTab === 'text' && <Text />}
        {activeTab === 'form' && <Form />}
        {activeTab === 'buttons' && <Buttons />}
        {activeTab === 'scheme' && <Scheme />}
        {activeTab === 'slider' && <Slider />}
        {activeTab === 'blackpage' && <BlackPage />}
        {activeTab === 'beautiful' && (
          <div className="beautiful-section">
            <h2>Красота</h2>
            <div className="beautiful-grid">
              <div className="beautiful-item">
                <h3>Кнопка с эффектами</h3>
                <div className="beautiful-demo">
                  <BeautifulButton />
                </div>
              </div>
              <div className="beautiful-item">
                <h3>Анимированный чекбокс</h3>
                <div className="beautiful-demo">
                  <ToggleSwitch />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;