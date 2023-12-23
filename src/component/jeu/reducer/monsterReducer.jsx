import { useCallback, useReducer } from "react"

function monsterReducer(state, action){

    if(action.type === "INIT_HP"){
        return{
            ...state,
            hp: state.hp_max
        }
    }

    if(action.type === "DECREASE_HP"){
        return {
            ...state,
            hp: state.hp-action.payload
        }
    }

    if(action.type === "UPGRADE_MONSTER"){
        let newHp = state.hp_max + 1
        let dmg = state.dmg
        let critChance = state.critChance
        let critDmg = state.critDmg
        let hitChance = state.hitChance
        let missChance = state.missChance
        let attackSpeed = state.attackSpeed
        let money = state.money

        if(action.payload%2 === 0){
            newHp = newHp+2
            if(action.payload >= 100 && action.payload < 200){
                money = state.money + 5
            }else if(action.payload >= 200 && action.payload < 300){
                money = state.money + 8
            }else if(action.payload >= 300 && action.payload < 400){
                money = state.money + 11
            }else if(action.payload >= 400 && action.payload < 500){
                money = state.money + 15
            }else if(action.payload >= 500 && action.payload < 600){
                money = state.money + 20
            }else{
                money = state.money + 3
            }
        }

        if(action.payload%3 === 0){
            dmg = state.dmg+1
        }

        if(action.payload%4 === 0){
            if(state.attackSpeed > 200){
                attackSpeed = state.attackSpeed - 10
            }  
        }

        if(action.payload%5 === 0){

            critChance = state.critChance + 0.004
            critDmg = state.critDmg + 0.04

            if(state.hitChance < 2){
                hitChance = state.hitChance + 0.01
            }
            if(state.missChance < 0.3){
                missChance = state.missChance + 0.008
            }else if(state.missChance >= 0.3 && state.missChance < 0.5){
                missChance = state.missChance + 0.004
            }else if(state.missChance >= 0.5 && state.missChance < 0.7){
                missChance = state.missChance + 0.001
            }else{
                missChance = state.missChance + 0.0005
            }

            if(action.payload >= 100 && action.payload < 200){
                money = state.money + 6
            }else if(action.payload >= 200 && action.payload < 300){
                money = state.money + 10
            }else if(action.payload >= 300 && action.payload < 400){
                money = state.money + 15
            }else if(action.payload >= 400 && action.payload < 500){
                money = state.money + 22
            }else if(action.payload >= 500 && action.payload < 600){
                money = state.money + 30
            }else{
                money = state.money + 4
            }
            
        }

        return {
            ...state,
            hp_max: newHp,
            dmg: dmg,
            critChance: critChance,
            critDmg: critDmg,
            hitChance: hitChance,
            missChance: missChance,
            attackSpeed: attackSpeed,
            money: money
        }

    }


    if(action.type==="SET_MONSTER"){
        return action.payload
    }

    if(action.type==="SET_WIDTH"){
        return {
            ...state,
            width: action.payload
        }
    }

    if(action.type==="SET_HEIGHT"){

        return {
            ...state,
            height: action.payload
        }
    }

    return state
    
}//fin du reducer

export function useMonster(etat){
    const [state, dispatch] = useReducer(monsterReducer, etat)

    return {
        monster: state,
        initMonsterHp: useCallback(() => dispatch({type: "INIT_HP"}), []),
        decreaseMonsterHp: useCallback((dmg)=> dispatch({type: "DECREASE_HP", payload: dmg}), []),
        upgradeMonster: useCallback((count) => dispatch({type: "UPGRADE_MONSTER", payload: count}), []),
        setMonster: useCallback((monster) => dispatch({type: "SET_MONSTER", payload: monster})),   
        setWidth: useCallback((value) => dispatch({type: "SET_WIDTH", payload: value})),
        setHeight: useCallback((value) => dispatch({type: "SET_HEIGHT", payload: value}))
    }
}