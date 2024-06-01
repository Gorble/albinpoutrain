import { useContext } from "react"
import { ThemeContext } from "../../../contexts/ThemeContext"

export function Field({id, reference, signe, children}){

    const {theme} = useContext(ThemeContext)

    const style = theme === "light" ? {backgroundColor: "white"} : {backgroundColor: "rgba(255, 255, 255, 0.7)"}

    return <div className="field">
        <label htmlFor={id}>{children} </label>
        <input type="text" id={id} name={id}ref={reference} style={style}/>
        <span className="signe">{signe}</span>
    </div>
}