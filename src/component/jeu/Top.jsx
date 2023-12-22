import { useContext, useState } from "react";
import { Jauge } from "./component/Jauge";
import { MonsterContext, PlayerContext } from "./context/gameContext";
import { GameButton } from "./component/GameButton";
import { Tab } from "./component/Tab";
import { Statistic } from "./component/Statistic";

export function Top({onPlaying, onPause, pause, count, onBossCall, bossCall}){

    const {monster} = useContext(MonsterContext)
    const {player} = useContext(PlayerContext)

    const [display, setDisplay] = useState(false)


    const boss_button_disabled = count < 500 || bossCall === true || bossCall === "called" ? true : false
    const start_button_disabled = bossCall === true ? true : false



    return <div className="top" >
        <div className="special_buttons">
            <button onClick={()=> onPlaying(false) }>Menu</button>
            <button 
                onClick={() => onPause(state => !state) } 
                disabled={start_button_disabled}
                className="upgrades_button"
            >{pause ? "Lancer" : "Pause"}</button>
        </div>
        
            
        <Jauge caracter={monster}></Jauge>
            
            
        <GameButton
            id={"monster_stat_button"}
            onDisplay={setDisplay}
        >Statistiques</GameButton>
        <button
            id={"boss_button"}
            onClick={() => onBossCall(true)}
            disabled={boss_button_disabled}
            className="upgrades_button"
        >{count < 500 ? `${count}/500` : "BOSS"}</button>


        <Tab display={display} className="stat_monster"><Statistic caracter={monster} enemy={player}>{"L'ennemi"}</Statistic></Tab>
        
        
    </div>
}