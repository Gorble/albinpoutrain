import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
    theme: "light",
    themeSwitcher: () => {}
})

export function ThemeContextProvider ({children}){

    const cookie = document.cookie.split("=")[1] === "dark" ? "dark" : "light"

    const [theme, setTheme] = useState(cookie)

    const themeSwitcher = (theme) => {
        setTheme(() => theme)
    }

    useEffect(() => {
        document.cookie = `theme=${theme}`
    }, [theme])



    const ThemeValue = {theme, themeSwitcher}


    return <ThemeContext.Provider value={ThemeValue}>
        {children}
    </ThemeContext.Provider>
}