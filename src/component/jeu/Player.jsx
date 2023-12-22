import { useContext, useEffect,  useState } from "react"
import { MonsterContext, PlayerContext } from "./context/gameContext"
import { Jauge } from "./component/Jauge"
import { damages } from "./function/damage"
import { GameButton } from "./component/GameButton"
import { Tab } from "./component/Tab"
import piece from "./img/piece.png"
import {formatNumberWithSpaces} from "../../function/formatNumerWithSpaces"
import { Statistic } from "./component/Statistic"
import { Upgrades } from "./component/Upgrades"

export function Player({isPlaying, pause}){

    const {player, handleGold} = useContext(PlayerContext)
    const {monster, decreaseMonsterHp} = useContext(MonsterContext)

    const [displayStat, setDisplayStat] = useState(false)
    const [displayUpgrade, setDisplayUpgrade] = useState(false)

    useEffect(()=>{
        let attackMonster = null
        if(isPlaying  && !pause){
            attackMonster = setInterval(()=>{
                decreaseMonsterHp(damages(player, monster))
            }, player.attackSpeed)
        }else{
            window.clearInterval(attackMonster)
        }
        
        return ()=>{
            window.clearInterval(attackMonster)
        }
    }, [isPlaying, pause, 
        player.hitChance, player.dmg, player.critChance, player.critDmg, player.attackSpeed,
        monster.missChance])

   
    return <div className="player" >
        <GameButton onDisplay={setDisplayStat}>Statistiques</GameButton>
        <Tab display={displayStat} className="stat_player"><Statistic caracter={player} enemy={monster}>{"Vous"}</Statistic></Tab>
        <Jauge caracter={player}></Jauge>
        <GameButton onDisplay={setDisplayUpgrade}>Améliorations</GameButton>
        <Tab display={displayUpgrade} className="upgrades"><Upgrades caracter={player} handleGold={handleGold} /></Tab>
        <div className="money">
            <img src={piece} alt="Mont de pièce d'or"></img>
            <p>{formatNumberWithSpaces(parseFloat(player.money).toFixed(2))}</p>
        </div>
    </div>
}

