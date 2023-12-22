import { useCallback, useReducer } from "react"

function playerReducer(state, action){
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
    if(action.type === "ADD_GOLD"){
        return {
            ...state,
            money: state.money + action.payload
        }
    }
    if(action.type === "INCREASE_HP"){
        
        return {
            ...state,
            hp_max: state.hp_max*1.1
        }
    }
    if(action.type === "INCREASE_DMG"){
        
        return {
            ...state,
            dmg: state.dmg+1
        }
    }
    if(action.type === "INCREASE_CRIT_CHANCE"){
        
        return {
            ...state,
            critChance: state.critChance+0.01
        }
    }
    if(action.type === "INCREASE_CRIT_DMG"){
        
        return {
            ...state,
            critDmg: state.critDmg+0.05
        }
    }
    if(action.type === "INCREASE_HIT_CHANCE"){
        
        return {
            ...state,
            hitChance: state.hitChance+0.01
        }
    }
    if(action.type === "INCREASE_MISS_CHANCE"){
        
        return {
            ...state,
            missChance: state.missChance+0.01
        }
    }
    if(action.type === "INCREASE_ATTACK_SPEED"){
        let value = 50
        let attackSpeed = state.attackSpeed
        
        if(attackSpeed <= 1300 && attackSpeed > 1100) value = 40
        if(attackSpeed <= 1100 && attackSpeed > 900) value = 35
        if(attackSpeed <= 900 && attackSpeed > 700) value = 20
        if(attackSpeed <= 700 && attackSpeed > 500) value = 10
        if(attackSpeed <= 500 && attackSpeed > 300) value = 5
        if(attackSpeed <= 300 && attackSpeed > 100) value = 2
        if(attackSpeed <= 100 && attackSpeed > 10) value = 1
        if(attackSpeed <= 10) value = 0


        return {
            ...state,
            attackSpeed: state.attackSpeed-value
        }
    }

    if(action.type === "RESTART"){
        return action.payload
    }
    return state
}

export function usePlayer(etat){
    const [state, dispatch] = useReducer(playerReducer, etat)

    return {
        player: state,
        initPlayerHp: useCallback(() => dispatch({type: "INIT_HP"}), []),
        decreasePlayerHp: useCallback((dmg)=> dispatch({type: "DECREASE_HP", payload: dmg}), []),
        handleGold: useCallback((amount) => dispatch({type: "ADD_GOLD", payload: amount}), []),
        increaseHp: useCallback(()=> dispatch({type: "INCREASE_HP"})),
        increaseDmg: useCallback(()=> dispatch({type: "INCREASE_DMG"})),
        increaseCritChance: useCallback(()=> dispatch({type: "INCREASE_CRIT_CHANCE"})),
        increaseCritDmg: useCallback(()=> dispatch({type: "INCREASE_CRIT_DMG"})),
        increaseHitChance: useCallback(()=> dispatch({type: "INCREASE_HIT_CHANCE"})),
        increaseMissChance: useCallback(()=> dispatch({type: "INCREASE_MISS_CHANCE"})),
        increaseAttackSpeed: useCallback(()=> dispatch({type: "INCREASE_ATTACK_SPEED"})),
        setPlayer: useCallback((state) => dispatch({type: "RESTART", payload: state}))
    }
}

