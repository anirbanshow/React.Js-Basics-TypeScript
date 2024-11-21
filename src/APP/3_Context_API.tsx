import { createContext, ReactNode, useState } from "react";
import ThemeTogglerBox from "./components/ThemeTogglerBox";

type ThemeType = "light" | "dark";

interface ThemeContextType {
    theme: ThemeType;
    toggleTheme: () => void;
}

export const ThemeContext = createContext < ThemeContextType > ({
    theme: "light",
    toggleTheme: () => { }
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {

    const [theme, setTheme] = useState < ThemeType > ("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }

    return (
        <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

const App = () => {
    return (
        <ThemeProvider>
            <h1>App</h1>
            <ThemeTogglerBox />
        </ThemeProvider>
    )
}

export default App;