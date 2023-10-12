import { useEffect, useState } from "react";
import { Exercice } from "./component/Exercice";
import { Explication } from "./component/Explication";
import { Nutrition } from "./component/Nutrition";


export function Resultat ({info}){

    const [exerciceSize, setGridSize] = useState("auto")

    useEffect(()=>{
        window.scrollTo(0,0)
    }, [])

    return <div className="resultat">
        <Exercice info={info} size={exerciceSize}/>
        <Nutrition info={info.generale} setGridSize={setGridSize}/>
        <Explication info={info} />
    </div>
}