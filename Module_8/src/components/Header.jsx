import ThemeToggle from "../context/ThemeToggle";
import { useTheme } from "../context/dark-mode"; // Подключаем ваш контекст темы
import nightSearch from "../assets/search.svg";   // Иконка для темной темы
import lightSearch from "../assets/Vector.svg";   // Иконка для светлой темы

export default function Header({ searchQuery, setSearchQuery, filter, setFilter }) {
    const { darkMode } = useTheme(); // Получаем состояние темной темы

    return (
        <header className="header">
            <h1>TODO LIST</h1>
            <div className="controls">
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Search note..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <span className="search-icon">
                        {/* Меняем иконку в зависимости от darkMode */}
                        <img src={darkMode ? nightSearch : lightSearch} alt="Search" />
                    </span>
                </div>
                <select value={filter} onChange={(e) => setFilter(e.target.value)} className="filter-select">
                    <option value="ALL">ALL</option>
                    <option value="COMPLETE">COMPLETE</option>
                    <option value="INCOMPLETE">INCOMPLETE</option>
                </select>
                <ThemeToggle />
            </div>
        </header>
    );
}