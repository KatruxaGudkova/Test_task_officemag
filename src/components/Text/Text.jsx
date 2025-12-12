// import { useState } from 'react';
// import '../../App.css';
import './Text.css';

// Text Component
function Text() {
  return (
    <article className="text-component">
      <h1>Заголовок первого уровня</h1>
      <p className="lead">Это вводный абзац с увеличенным размером текста, который привлекает внимание читателя.</p>
      
      <h2>Заголовок второго уровня</h2>
      <p>Обычный абзац текста с <strong>жирным выделением</strong> и <em>курсивом</em>. Также можно использовать <mark>подсветку текста</mark> и <code>инлайн код</code>.</p>
      
      <blockquote>
        <p>Это цитата, которая выделяется особым образом и привлекает внимание к важной мысли.</p>
        <footer>— Автор цитаты</footer>
      </blockquote>
      
      <h3>Списки</h3>
      <ul>
        <li>Первый элемент списка</li>
        <li>Второй элемент списка
          <ul>
            <li>Вложенный элемент</li>
            <li>Еще один вложенный</li>
          </ul>
        </li>
        <li>Третий элемент списка</li>
      </ul>
      
      <ol>
        <li>Нумерованный список</li>
        <li>Второй пункт</li>
        <li>Третий пункт</li>
      </ol>
      
      <pre><code>{`function example() {
  return "Пример кода в блоке";
}`}</code></pre>
      
      <p>Ссылка на <a href="#test">внутреннюю страницу</a> и <a href="https://example.com" target="_blank" rel="noopener noreferrer">внешний сайт</a>.</p>
    </article>
  );
}

export default Text
