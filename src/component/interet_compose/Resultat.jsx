import { useContext } from "react";
import { Lines } from "./Lines";
import { ThemeContext } from "../contexts/ThemeContext";

const calcul = (values)=>{
    console.log("enter")
    let tab = []
    let pocket = []
    let last = 0
    let calc = (values.initial+values.regulier)*(1+(values.interet/100))
    if(isNaN(calc)) return tab

    tab.push(calc)
    last = calc

    pocket.push(parseFloat(values.initial)+parseFloat(values.regulier))

    for(let i = 0; i < (values.duree-1); i++){
        
        calc = (calc +values.regulier)*(1+(values.interet/100))
        tab.push(calc)
        pocket.push(pocket[pocket.length-1]+parseFloat(values.regulier))

        if(i == values.duree-2) last = calc
    }
    return [tab, last, pocket]
}


export function Resultat({values}){

    const {theme} = useContext(ThemeContext)

    const [tab, last, pocket] = Object.keys(values).length === 0 ? [0,0,0] 
                                : calcul(values)
    

    return <div className={`bloc bloc_${theme}`}>

        {

                Object.keys(values).length === 0 ? 
                <p><strong>Attente d'un calcul...</strong></p>
                :
                <Lines tab={tab} last={last} pocket={pocket}/>     
        }

    </div>
}