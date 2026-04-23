import { ThemeProvider, useTheme } from "./ThemeContext";

const Toggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} style={{ padding: "10px 15px" }}>
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
    );
};

function ThemeChange() {
    return (
        <ThemeProvider>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px" }}>
                <h1>Theme Toggle to change Theme</h1>
                <Toggle />
            </div>
        </ThemeProvider>
    );
}

export default ThemeChange;