import { createContext, useState } from "react";

export const ThemeContext = createContext({
    theme: "light",
    themeSwitcher: () => {}
})

export function ThemeContextProvider ({children}){
    const [theme, setTheme] = useState("light")
    const themeSwitcher = (theme) => {
        setTheme(() => theme)
    }

    const ThemeValue = {theme, themeSwitcher}


    return <ThemeContext.Provider value={ThemeValue}>
        {children}
    </ThemeContext.Provider>
}