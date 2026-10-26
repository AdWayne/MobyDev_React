//Способ 1. Стрелочные функции

// function Task2() {
//  const handleClick = (id) => {
//    console.log("Нажат элемент с ID:", id);
//  };

//  return (
//    <button onClick={() => handleClick(1)}>Нажми на кнопку</button>
//  );
// }


//Способ 2. Метод bind

// function Task2() {
//  const handleClick = (id) => {
//    console.log("Нажат элемент с ID:", id);
//  };

//  return (
//    <button onClick={handleClick.bind(null, 1)}>Нажми на кнопку</button>
//  );
// }


//3 Передача параметров через объект event

// function Task2() {
//  const handleInputChange = (event) => {
//    console.log("Введено значение:", event.target.value);
//  };

//  return <input onChange={handleInputChange} />;
// }

function Task2() {
 const handleClick = (event, id) => {
   console.log("ID:", id, "Координаты клика:", event.clientX, event.clientY);
 };

 return (
   <button onClick={(e) => handleClick(e, 1)}>Кликни сюда</button>
 );
}


export default Task2