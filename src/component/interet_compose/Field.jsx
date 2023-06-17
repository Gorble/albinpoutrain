import { useContext } from "react"
import { GetValueContext } from "./context";

export function Field({id, reference, signe, children}){

    const {state, getValue} = useContext(GetValueContext)


    return <div className="field">
        <label htmlFor={id}>{children} </label>
        <div className="div_input">
            <input type="text" id={id} value={state[id]} onChange={getValue} ref={reference}/>
            <span className="signe">{signe}</span>
        </div>
    </div>
}