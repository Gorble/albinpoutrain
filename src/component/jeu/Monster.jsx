import { useContext, useEffect, useState } from "react"
import { MonsterContext, PlayerContext } from "./context/gameContext"
import { damages } from "./function/damage"

import prairie from "./img/prairie.png"

export function Monster({isPlaying, pause, count, monsterRef, darknessRef}){

    const{monster} = useContext(MonsterContext)
    const{player, decreasePlayerHp} = useContext(PlayerContext)

    const [width, setWidth] = useState(10)
    const [height, setHeight] = useState(10)
    const [fire, setFire] = useState(80)

    useEffect(()=>{
        let attackPlayer = null
        if(isPlaying && !pause){
            attackPlayer = setInterval(()=>{
                decreasePlayerHp(damages(monster, player))
            }, monster.attackSpeed)
        }else{
            window.clearInterval(attackPlayer)
        }

        return () => {
            window.clearInterval(attackPlayer)
        }

    },[isPlaying, pause, monster.hitChance, monster.dmg, monster.critChance, monster.critDmg, monster.attackSpeed,
        player.missChance])
    
    const value = (count/200) < 0.9 ? (count/200) : 0.9

    useEffect(()=>{
        count %2 === 0 ? setHeight(height+0.5) : setWidth(width+0.5)
        if(value >= 0.9){
            setFire(fire-0.2)
        }
    }, [count])

    
    return <div className="monster"
                style={{
                    backgroundImage: `url(${prairie})`
                }}>
        <div className="darkness"
             style={{
                background: `linear-gradient(rgba(0, 0, 0, ${value})${fire}%, rgb(255, 0, 0, ${value}))`
             }}
             ref={darknessRef}
        ></div>

        <div className="monster_skin"
            style={{
                width: `${width}px`,
                height: `${height}px`
            }}
            ref={monsterRef}
        ></div>
    </div>
}