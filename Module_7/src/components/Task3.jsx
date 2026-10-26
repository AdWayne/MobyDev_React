import { useState } from "react";
import { useRef } from "react";

//useState
// function Task3() {
//  const [value, setValue] = useState("");

//  const handleChange = (e) => setValue(e.target.value);

//  const handleSubmit = (e) => {
//    e.preventDefault();
//    alert(`Вы ввели: ${value}`);
//  };

//  return (
//    <form onSubmit={handleSubmit}>
//      <input type="text" value={value} onChange={handleChange} />
//      <button type="submit">Отправить</button>
//    </form>
//  );
// }


//Ref
// function Task3() {
//  const inputRef = useRef(null);

//  const handleSubmit = (e) => {
//    e.preventDefault();
//    alert(`Вы ввели: ${inputRef.current.value}`);
//  };

//  return (
//    <form onSubmit={handleSubmit}>
//      <input type="text" ref={inputRef} />
//      <button type="submit">Отправить</button>
//    </form>
//  );
// }


// Обработка нескольких полей
function Task3() {
    const [formData, setFormData] = useState({ name: "", email: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.email.includes("@")){
            alert("Введите корректный email!");
            return;
        }
        if (!formData.name.includes("Azamat")) {
            alert("Введите имя!");
            return;
        }
        console.log("Данные корректны:", formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Имя"
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <button type="submit">Отправить</button>
        </form>
    );
}




export default Task3