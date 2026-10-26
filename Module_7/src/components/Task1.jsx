
//Основы синтетических событий

// function Task1() {
//  const handleClick = (event) => {
//    console.log('Кнопка нажата:', event);
//  };

//  return <button onClick={handleClick}>Нажми на меня</button>;
// }


//Обработка событий в React

// function Task1() {
//  const handleMouseOver = () => {
//    alert("Мышь над элементом!");
//  };

//  return <div onMouseOver={handleMouseOver}>Наведи мышь сюда</div>;
// }


//Работа с event объектом

// function Task1() {
//  const handleInputChange = (event) => {
//    console.log("Значение:", event.target.value);
//  };

//  return <input onChange={handleInputChange} />;
// }


//Предотвращение действия по умолчанию

// function Task1() {
//  const handleLinkClick = (event) => {
//    event.preventDefault();
//    alert("Ссылка была нажата, но действие отменено.");
//  };

//  return (
//    <a href="https://example.com" onClick={handleLinkClick}>
//      Нажмите на меня
//    </a>
//  );
// }

//Удаление обработчиков событий
import { useEffect } from "react";

function Task1() {
 useEffect(() => {
   const handleResize = () => {
     console.log("Размер окна изменён.");
   };

   window.addEventListener("resize", handleResize);
   return () => {
     window.removeEventListener("resize", handleResize);
   };
 }, []);

 return <div>Измените размер окна.</div>;
}


export default Task1