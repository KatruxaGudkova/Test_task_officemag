// import '../../App.css';
import './Buttons.css'

function Buttons() {
  return (
    <div className="buttons-component">
      <h2>Кнопки</h2>
      
      <div className="button-row">
        <button className="btn btn--default">Просмотреть</button>
        <button className="btn btn--outlined">Просмотреть</button>
        <button className="btn btn--red">Просмотреть</button>
        <button className="btn btn--arrow">Просмотреть ▸</button>
        <button className="btn btn--green">Просмотреть</button>
        <button className="btn btn--green-outlined">Просмотреть</button>
      </div>
      
      <div className="button-row">
        <button className="btn btn--default">Просмотреть</button>
        <button className="btn btn--outlined">Просмотреть</button>
        <button className="btn btn--red">Просмотреть</button>
        <button className="btn btn--arrow">Просмотреть ▸</button>
        <button className="btn btn--green">Просмотреть</button>
        <button className="btn btn--green-outlined">Просмотреть</button>
      </div>
      
      <div className="button-row">
        <button className="btn btn--default">Просмотреть</button>
        <button className="btn btn--outlined">Просмотреть</button>
        <button className="btn btn--red">Просмотреть</button>
        <button className="btn btn--arrow">Просмотреть ▸</button>
        <button className="btn btn--green">Просмотреть</button>
        <button className="btn btn--green-outlined">Просмотреть</button>
      </div>
      
      <div className="button-row">
        <button className="btn btn--default" disabled>Просмотреть</button>
        <button className="btn btn--outlined" disabled>Просмотреть</button>
        <button className="btn btn--red" disabled>Просмотреть</button>
        <button className="btn btn--arrow" disabled>Просмотреть ▸</button>
        <button className="btn btn--green" disabled>Просмотреть</button>
        <button className="btn btn--green-outlined" disabled>Просмотреть</button>
      </div>
      
      <div className="button-row button-row--icons">
        <button className="btn btn--icon">✏️ Редактировать</button>
        <button className="btn btn--icon">📊 Выгрузить в Excel</button>
        <button className="btn btn--icon">✖️ Удалить список</button>
        <button className="btn btn--icon">🖨️ Распечатать</button>
        <button className="btn btn--icon">📥 Загрузить из файла</button>
      </div>
    </div>
  );
}

export default Buttons