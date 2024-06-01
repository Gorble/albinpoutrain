import { useContext, useState } from "react"
import { ThemeContext } from "./contexts/ThemeContext"

export function ThemeSwitcher(){
    const {theme, themeSwitcher} = useContext(ThemeContext)
    const [state, setState] = useState(0)

    const switcher = () => {
        themeSwitcher(theme === "light" ? "dark" : "light")
        setState(state === 0 ? 1 : 0)
    }
    return <input type="range" min="0" max="1" value={state} onClick={switcher} className="theme_range"></input>

}