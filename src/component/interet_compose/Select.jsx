import { useContext } from "react"
import { GetValueContext } from "./context";

export function Select(){

    const {state, getValue} = useContext(GetValueContext)

    return <div>
        <label htmlFor="compose">Composé</label>
        <select name="compose" id="compose" defaultValue="4" onChange={getValue}>
            <option value="1">Par jour</option>
            <option value="2">Par semaine</option>
            <option value="3">Par mois</option>
            <option value="4">Par ans</option>
        </select>
    </div>
}