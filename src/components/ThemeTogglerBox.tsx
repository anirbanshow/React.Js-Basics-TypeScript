import { useContext } from "react"
import { ThemeContext } from "../App"

const ThemeTogglerBox = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div style={{
            backgroundColor: theme === "light" ? "#111" : "#fff",
            color: theme === "light" ? "#fff" : "#111"
        }}>
            <h1>Theme Toggler Box</h1>
            <h2>{theme}</h2>
            <button onClick={() => toggleTheme()}>Button</button>
        </div>
    )
}

export default ThemeTogglerBox