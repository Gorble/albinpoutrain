import { useCallback, useState } from "react"
import {Formulaire} from "../component/interet_compose/Formulaire.jsx"
import {Resultat} from "../component/interet_compose/Resultat.jsx"
import "../style/interet_compose/ic_style.css"

export function Interet_compose(){

    const [state, setState] = useState({})

    const getStateValues = useCallback((values) =>{
        setState(values)
    }, [])

    return <>
        <Formulaire getStateValues={getStateValues}/>
        <Resultat values={state}/>
    </>
}