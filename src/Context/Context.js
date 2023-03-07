import axios from "axios";
import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('light')

    const data = {
        theme, setTheme
    }

    return (
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;