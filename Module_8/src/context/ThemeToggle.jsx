import { useTheme } from "./dark-mode";
import moonIcon from "../assets/Moon.svg"
import sunIcon from "../assets/Sun.svg"

const ThemeToggle = () => {
    const { darkMode, toggleTheme } = useTheme()

    return (
        <button onClick={toggleTheme}>
            {darkMode ? <img src={sunIcon} alt="LightMode" /> : <img src={moonIcon} alt="DarkMode"></img>}
        </button>
    )
}

export default ThemeToggle
