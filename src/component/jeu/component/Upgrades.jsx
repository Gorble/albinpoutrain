import { useContext, useEffect, useReducer} from "react"
import { PlayerContext } from "../context/gameContext"



const UPGRADE = {
    hp_max: {name: "Points de vies", price: 1},
    dmg: {name: "Dégats", price: 1},
    critChance: {name: "Chance de coup critique", price: 1},
    critDmg: {name: "Multiplicateur de dégats critique", price: 1},
    hitChance: {name: "Chance de toucher", price: 1},
    missChance: {name: "Chance d'esquive", price: 1},
    attackSpeed: {name: "Vitesse d'attaque", price: 1}
}

function upgradesReducer(state, action){
    if(action.type === "Points de vies"){
        action.payload()
        action.handleGold(-state.hp_max.price)
        return {
            ...state,
            hp_max: {
                ...state.hp_max, 
                price: state.hp_max.price*1.13
            }
        }
    }
    if(action.type === "Dégats"){
        action.payload()
        action.handleGold(-state.dmg.price)
        return {
            ...state,
            dmg: {
                ...state.dmg, 
                price: state.dmg.price*1.145
            }
        }
    }
    if(action.type === "Chance de coup critique"){
        action.payload()
        action.handleGold(-state.critChance.price)
        return {
            ...state,
            critChance: {
                ...state.critChance, 
                price: state.critChance.price*1.15
            }
        }
    }
    if(action.type === "Multiplicateur de dégats critique"){
        action.payload()
        action.handleGold(-state.critDmg.price)
        return {
            ...state,
            critDmg: {
                ...state.critDmg, 
                price: state.critDmg.price*1.14
            }
        }
    }
    if(action.type === "Chance de toucher"){
        action.payload()
        action.handleGold(-state.hitChance.price)
        return {
            ...state,
            hitChance: {
                ...state.hitChance, 
                price: state.hitChance.price*1.085
            }
        }
    }
    if(action.type === "Chance d'esquive"){
        action.payload()
        action.handleGold(-state.missChance.price)
        return {
            ...state,
            missChance: {
                ...state.missChance, 
                price: state.missChance.price*1.095
            }
        }
    }
    if(action.type === "Vitesse d'attaque"){
        action.payload()
        action.handleGold(-state.attackSpeed.price)
        return {
            ...state,
            attackSpeed: {
                ...state.attackSpeed, 
                price: state.attackSpeed.price*1.085
            }
        }
    }

    if(action.type === "RESTART"){
        return action.payload
    }

    return state
} 



export function Upgrades({caracter,  handleGold}){

    const [upgrades, setUpgrades] = useReducer(upgradesReducer, UPGRADE)

    const {increaseHp, increaseDmg, increaseCritChance, increaseCritDmg, increaseHitChance, increaseMissChance, increaseAttackSpeed, restart} = useContext(PlayerContext)

    const increasers = {
        hp_max: increaseHp,
        dmg: increaseDmg,
        critChance: increaseCritChance,
        critDmg: increaseCritDmg,
        hitChance: increaseHitChance,
        missChance: increaseMissChance,
        attackSpeed: increaseAttackSpeed,
    }

    useEffect(()=>{
        if(restart > 0){
            setUpgrades({type:"RESTART", payload: UPGRADE})
        }
    }, [restart])


    let tab = []


    for (let propriete in caracter) {
        if(propriete === "hp" || propriete === "money"){
            continue
        }

        const data = upgrades[propriete]
        let isMax = false
        let notRichEnough = caracter.money >= data.price ? false : true


        if(propriete === "critChance") caracter[propriete] >= 1 ? isMax = true : isMax = false
        if(propriete === "attackSpeed") caracter[propriete] === 10 ? isMax = true : isMax = false
        if(propriete === "hitChance") caracter[propriete] >= 2 ? isMax = true : isMax = false
        if(propriete === "missChance") caracter[propriete] >= 0.95 ? isMax = true : isMax = false

        tab.push(<tr key={propriete}>
            <td id="upgrade_name">{data.name + ": "}</td>
            <td id="price_td">
                <p>{(data.price).toFixed(2)}</p>
            </td>
            <td id="upgrade_button_td">
                <button 
                    className="upgrades_button" 
                    disabled={isMax || notRichEnough}
                    onClick={() => setUpgrades({type: data.name, payload: increasers[propriete], handleGold: handleGold})}
                > {isMax ? "MAX" : "↑"}</button>
            </td>
        </tr>)
    }

    return <table className="upgrade_table">
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prix</th>
            </tr>
        </thead>
        <tbody>
            {tab}
        </tbody>
        
    </table>
}