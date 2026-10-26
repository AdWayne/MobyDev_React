import { Link } from 'react-router-dom';
export default function About() {
 return (
    <>
    <h1>О нас</h1>
    <Link to="/">Главная</Link>
    <Link to="/users">Пользователи</Link>
    </>
 )
}
