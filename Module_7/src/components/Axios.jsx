import { useState, useEffect } from "react";
import axios from "axios";
import api from "../constants/api";

//GET AND DELETE
export default function Axios() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        api.get("/users", {
            params: { limit: 5 },
            headers: { Authorization: "Bearer token" },
            timeout: 5000,
        })
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error("Ошибка при загрузке пользователей:", error);
            });
    }, []);

    function deleteUser(userId) {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(() => console.log("Пользователь удалён"))
            .catch(error => console.error("Ошибка при удалении пользователя:", error));
    }


    return (
        <ul style={{ padding: 0, color: "white" }}>
            {users.map(user => (
                <div key={user.id}>
                    <li>{user.name}</li>
                    <button onClick={() => deleteUser(user.id)}>Удалить</button>
                </div>
            ))}
        </ul>
    );

    //POST

    // const [name, setName] = useState("");

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post("https://jsonplaceholder.typicode.com/users", {
    //             name
    //         });
    //         console.log("Пользователь создан:", response.data);
    //     } catch (error) {
    //         console.error("Ошибка при создании пользователя:", error);
    //     }
    // };
    // return (
    //     <form onSubmit={handleSubmit}>
    //         <input
    //             type="text"
    //             placeholder="Введите имя"
    //             value={name}
    //             onChange={(e) => setName(e.target.value)}
    //         />
    //         <button type="submit">Создать</button>
    //     </form>
    // );


}