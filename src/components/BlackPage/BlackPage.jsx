import './BlackPage.css';

function BlackPage() {
  return (
    <div className="blackpage-component">
      <h2>Чёрная страница (исправлена)</h2>
      <div className="blackpage-content">
        <header className="blackpage-header">
          <h1>Pineapplepen</h1>
          <p className="blackpage-subtitle">Проблемы исправлены</p>
        </header>
        <ul className="fix-list">
          <li><span className="check">✅</span> Удалён тяжёлый BMP-файл (27MB)</li>
          <li><span className="check">✅</span> Скрипты загружаются правильно</li>
          <li><span className="check">✅</span> Исправлена кодировка текста (UTF-8)</li>
          <li><span className="check">✅</span> Удалены синтаксические ошибки CSS</li>
          <li><span className="check">✅</span> Исправлена семантика HTML</li>
          <li><span className="check">✅</span> Оптимизирован и очищен код</li>
        </ul>
      </div>
    </div>
  );
}

export default BlackPage