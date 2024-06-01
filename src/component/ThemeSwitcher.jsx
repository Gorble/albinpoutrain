import { useContext, useEffect, useRef, useState } from "react"
import { ThemeContext } from "./contexts/ThemeContext"
import light from "../imgs/light.svg"
import dark from "../imgs/dark.svg"

export function ThemeSwitcher(){
    const {theme, themeSwitcher} = useContext(ThemeContext)
    const [state, setState] = useState(theme === "light" ? light : dark)
    const [ThemeRef, setThemeRef] = useState(0)
    const [ImgRef, setImgRef] = useState(0)

    const themeRef = useRef()
    const imgRef = useRef()


    const STYLE = {
        dark: {
            backgroundColor: "rgb(0, 29, 80)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
        },
        light: {
            backgroundColor: "rgb(240, 243, 248)",
            border: "1px solid rgba(0, 0, 0, 0.2)",
        }
    }


    useEffect(() => {
        if (themeRef.current) {
            setThemeRef(themeRef.current)
        }

        if (imgRef.current) {
            setImgRef(imgRef.current)
        }

        
        if(theme === "dark"){
            imgRef.current.style.left = 0
        }else{
            imgRef.current.style.right = 0
        }



    }, []);




    const switcher = () => {
        themeSwitcher(theme === "light" ? "dark" : "light")
        setState(state === light ? dark : light)
        if(imgRef.current.style.left === ""){
            imgRef.current.style.transform= `translate(-${theme === "dark" ? 0 : ThemeRef.clientWidth-ImgRef.clientWidth}px)`
        }else{
            imgRef.current.style.transform= `translate(${theme === "dark" ? ThemeRef.clientWidth-ImgRef.clientWidth+"px" : 0})`
        }
    }

    return <div className="theme" ref={themeRef} style={theme === "light" ? STYLE.light : STYLE.dark}>
        <input type="checkbox" onChange={switcher} id="theme_switcher"></input>
        <label htmlFor="theme_switcher"></label>
        <img src={state} 
        ref={imgRef}
        onClick={switcher} 
        alt="Bouton pour changer le theme de la page (sombre/ clair)" 
        height={ThemeRef.clientHeight}
        />
    </div>


}
