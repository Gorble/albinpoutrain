import { useContext } from "react"
import { GetValueContext } from "./context";

export function Field({id, reference, signe, children}){

    const {state, getValue} = useContext(GetValueContext)


    return <div className="field field_ic">
        <label htmlFor={id}>{children} </label>
        <input type="text" id={id} value={state[id]} onChange={getValue} ref={reference}/>
        <span className="signe">{signe}</span>
    </div>
}