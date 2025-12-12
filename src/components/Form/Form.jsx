import { useState } from 'react';
import './Form.css';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    passport: '',
    color: '#0000ff',
    comment: '',
    radio: '',
    agree: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Отправка данных:', formData);
  };

  return (
    <div className="form-wrapper">
      <div className="form-component">
        <h2 className="form-title">Заполните поля</h2>
        <p className="form-subtitle">ну пожалуйста</p>
        
        <section className="form-section form-section--basic">
          <h3 className="section-title">Основное</h3>
          
          <div className="form-field">
            <label htmlFor="name">Имя</label>
            <input 
              type="text" 
              id="name" 
              placeholder="по паспорту"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          <div className="form-field">
            <label htmlFor="color">Цвет вашего настроения</label>
            <input 
              type="color" 
              id="color"
              value={formData.color}
              onChange={(e) => setFormData({...formData, color: e.target.value})}
            />
          </div>
        </section>
        
        <section className="form-section form-section--additional">
          <h3 className="section-title">Дополнительное</h3>
          
          <div className="form-field">
            <label htmlFor="comment">Комментарий</label>
            <textarea 
              id="comment" 
              placeholder="Напишите хоть что-нибудь.&#10;Если хотите, конечно."
              value={formData.comment}
              onChange={(e) => setFormData({...formData, comment: e.target.value})}
            />
          </div>
          
          <div className="form-field">
            <label className="radio-label">
              <input 
                type="radio" 
                name="radio"
                value="option1"
                checked={formData.radio === 'option1'}
                onChange={(e) => setFormData({...formData, radio: e.target.value})}
              />
              <span>Ну а тут просто полежит радиобатон</span>
            </label>
          </div>
          
          <div className="form-field">
            <label className="checkbox-label">
              <input 
                type="checkbox"
                checked={formData.agree}
                onChange={(e) => setFormData({...formData, agree: e.target.checked})}
              />
              <span>Соглашаюсь на всё, что бы вы не придумали и осознаю, что это может означать <a href="#terms">что угодно</a></span>
            </label>
          </div>
        </section>
        
        <button type="button" className="form-submit" onClick={handleSubmit}>
          Отправить все мои данные
        </button>
      </div>
    </div>
  );
}

export default Form