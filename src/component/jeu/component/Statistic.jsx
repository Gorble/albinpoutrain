import { useEffect } from "react"

const NAME = {
    hp_max: "Points de vie",
    dmg: "Dégats par coups",
    critChance: "Chance de coups critiques",
    critDmg: "Multiplicaeur de dégats critique",
    hitChance: "Chance de toucher",
    missChance: "Chance d'esquive",
    attackSpeed: "Vitesse d'attaque"
}

export function Statistic({ caracter, enemy, children}){

    const tab = []
    //Date.now()

    for (let propriete in caracter) {
        
        if(propriete === "attackSpeed"){
            tab.push(<li key={propriete} id={propriete}>{NAME[propriete] + ": " + (1000/caracter[propriete]).toFixed(2) + " /s"}</li>)
            continue
        }
        if(propriete === "hp_max"){
            tab.push(<li key={propriete} id={propriete}>{NAME[propriete] + ": " + caracter[propriete].toFixed(0)}</li>)
            continue
        }   
        if(propriete === "hp"){
            continue
        }   
        if(propriete === "money"){
            continue
        }
        if(propriete === "hitChance" || propriete === "missChance" || propriete === "critChance"){
            
            tab.push(<li key={propriete} id={propriete}>{NAME[propriete] + ": " + (caracter[propriete]*100).toFixed(2) + " %"}</li>)
            if(propriete === "hitChance"){
                const enemyStat = "missChance"
                tab.push(<li className="small" key={propriete + "_effective"} id={propriete + "_effective"}>{NAME[propriete]+ " effective" + ": " + ((caracter[propriete]*(1-enemy[enemyStat]))*100).toFixed(2) + " %"}</li>)
            }
            if(propriete === "missChance"){
                const calcul = (100-((enemy["hitChance"]*(1-caracter["missChance"]))*100)).toFixed(2)

                tab.push(<li className="small" key={propriete + "_effective"} id={propriete + "_effective"}>{NAME[propriete]+ " effective" + ": " + calcul + " %"}</li>)
            }
                
            continue
        }
        if(propriete === "dmg"){
            const attackSpeed = (1000/caracter["attackSpeed"])
            const dps = (caracter[propriete]*attackSpeed)
            const crit = caracter[propriete]*caracter["critDmg"]
            const nbCrit = caracter["critChance"]*100
            const nbNonCrit = 100-nbCrit
            const fullDps = (((nbCrit*crit)+(nbNonCrit*caracter[propriete]))/100)*attackSpeed
            const calcul = (caracter["hitChance"]*(1-enemy["missChance"])) >= 1 ? fullDps : fullDps*(caracter["hitChance"]*(1-enemy["missChance"]))
            tab.push(<li key={propriete} id={propriete}>{NAME[propriete] + ": " + caracter[propriete]}</li>)
            tab.push(
                <li className="small" key={propriete+"_effective"} id={propriete+"_effective"}>{"Dégâts /s" + ": " + dps.toFixed(2)}</li>,
                <li className="small" key={propriete+"_full_dps"} id={propriete+"_full_dps"}>{"Full dps: " + calcul.toFixed(2) + " (chance de toucher, critique, vitesse d'attaque)"}</li>
            )
            continue
        }
        if(propriete === "critDmg"){
            tab.push(<li key={propriete} id={propriete}>{NAME[propriete] + ": " + caracter[propriete].toFixed(2)}</li>)
            continue
        }  

    }
    
    
    
    return <>
        <h2>{children}</h2>
        <ul>{tab}</ul>
    </>
}


