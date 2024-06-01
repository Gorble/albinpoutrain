import { useContext } from "react"
import { GetValueContext } from "./context";
import { ThemeContext } from "../contexts/ThemeContext";

export function Field({id, reference, signe, children}){

    const {state, getValue} = useContext(GetValueContext)

    const {theme} = useContext(ThemeContext)

    const style = theme === "light" ? {backgroundColor: "white"} : {backgroundColor: "rgba(255, 255, 255, 0.7)"}


    return <div className="field field_ic">
        <label htmlFor={id}>{children} </label>
        <input type="text" 
            id={id} value={state[id]} 
            onChange={getValue} 
            ref={reference} 
            style={style}
        />
        <span className="signe">{signe}</span>
    </div>
}