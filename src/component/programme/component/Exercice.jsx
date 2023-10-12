import { useEffect, useRef } from "react"
import { exerciceAssignation } from "../function/exerciceAssignation"
import { Un } from "./days/Un"
import { Deux } from "./days/Deux"
import { Trois } from "./days/Trois"
import { Quatre } from "./days/Quatre"
import { Cinq } from "./days/Cinq"
import { Six } from "./days/Six"




export function Exercice({info, size}){

    exerciceAssignation(info)

    const whatDay = () => {
        switch(info.generale.training){
            case 1:
                return <Un info={info}></Un>
            case 2:
                return <Deux info={info}></Deux>

            case 3:
                return <Trois info={info}></Trois>

            case 4:
                return <Quatre info={info}></Quatre>

            case 5:
                return <Cinq info={info}></Cinq>

            case 6:
                return <Six info={info}></Six>

            default:
                console.log("erreur")
                break
        }
    }


    return <div className="exercice bloc"   style={{height: size + "px"}}>
        
        <h2>Exercices</h2>
        <div className="days">
            {
                whatDay()
            }
        </div>
        
    </div>
}