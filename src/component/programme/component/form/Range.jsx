import { useState } from "react"

export function Range({id, reference,  children}){

    const [state, setState] = useState(4)

    const handleChange = (e) =>{
        setState(e.currentTarget.value)

    }

    return <div className="range"> 
        <label htmlFor={id}>{children} <span className="nb_training">{state}</span></label>
        <input type="range" 
                min= "1" max="6" 
                name={id}
                value={state}
                onChange={handleChange}>
        </input>
            
    </div>
}