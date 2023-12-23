import { createContext } from "react";

export const MonsterContext = createContext({
    monster: {},
    initHp: () => {},
    decreaseMonsterHp: () =>{},
    upgradeMonster: () => {},
    setMonster: () => {},
    setWidth: () => {},
    setHeight: () => {}
})

export const PlayerContext = createContext({
    player: {},
    initPlayerHp: () => {},
    decreasePlayerHp: () => {},
    handleGold: () => {},
    increaseHp: () => {},
    increaseDmg: () => {},
    increaseCritChance: () => {},
    increaseCritDmg: () => {},
    increaseHitChance: () => {},
    increaseMissChance: () => {},
    increaseAttackSpeed: () => {},
    setPlayer: () => {}
})

