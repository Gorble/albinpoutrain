import { useCallback, useEffect, useRef, useState } from "react"
import { Player } from "../component/jeu/Player"
import "../style/jeu/jeu.css"
import { Menu } from "../component/jeu/Menu"
import { Monster } from "../component/jeu/Monster"
import { Top } from "../component/jeu/Top"
import { usePlayer } from "../component/jeu/reducer/playerReducer"
import { useMonster } from "../component/jeu/reducer/monsterReducer"
import { PlayerContext, MonsterContext } from "../component/jeu/context/gameContext"
import  gorille  from "../imgs/logo.png"


const BOSS = {
    hp_max: 30000,
    hp: 30000,
    dmg: 200,
    critChance: 0.4,
    critDmg: 5,
    hitChance: 2.5,
    missChance: 0.8,
    attackSpeed: 200,
    money: 10000000,
}

const PLAYER = { 
    hp_max: 10,
    hp: 10,
    dmg: 1,
    critChance: 0.01,
    critDmg: 1.5,
    hitChance: 0.95,
    missChance: 0.01,
    attackSpeed: 1500,
    money: 0
}

const MONSTER = {
    hp_max: 3,
    hp: 3,
    dmg: 1,
    critChance: 0.05,
    critDmg: 1.5,
    hitChance: 0.95,
    missChance: 0.01,
    attackSpeed: 1500,
    money: 1,
}

const callTheBoss = (setPause, monsterRef, setMonster, initPlayerHp) =>{
    setPause(true)
    const size = monsterRef.current.clientWidth
    const monsterDisappear = setInterval(()=>{
        monsterRef.current.style.width = parseInt(monsterRef.current.style.width)-1 + "px"
        monsterRef.current.style.height = parseInt(monsterRef.current.style.height)-1 + "px"
        if(parseInt(monsterRef.current.style.width)<= 0){
            let x = 0
            let y = 0
            let step = false

            const boss = document.createElement("img")
            boss.src = gorille
            boss.classList.add("boss")
            monsterRef.current.append(boss)

            window.clearInterval(monsterDisappear)

            const bossArrive = setInterval(()=>{
                boss.style.width = boss.clientWidth+10 +"px"
                step === false ? boss.style.top =  `${x}%` : boss.style.left = `${y}%`
                step === false ? x+=5 : y+=5
                step === false ? boss.style.transform='scaleX(-1)' : boss.style.transform='scaleX(1)'
                step = !step
                if(x>40 && y>40){
                            
                    window.clearInterval(bossArrive)
                    setMonster(BOSS)
                    initPlayerHp()
                    setPause(false)
                }
            }, 500)
        }
    }, size/10)
}

const maggotWillEatTheBoss = (setPause, monsterRef, darknessRef,)=>{
    setPause(true)
    monsterRef.current.firstElementChild.style.transform='rotate(-0.25turn)'
    darknessRef.current.style.backgroundColor = "black"
    setTimeout(()=>{
        darknessRef.current.style.background = `linear-gradient(rgba(0, 0, 0, 0)0%, rgb(255, 0, 0, 0))`
        setTimeout(()=>{
            const div_end = document.createElement("div")
            div_end.classList.add("div_end")
            div_end.innerText = "Vous avez sauvé la prairie d'une attaque très dangereuse, bien joué !"
            darknessRef.current.append(div_end)
            setTimeout(()=>{
                monsterRef.current.style.opacity = 0
            }, 2000)
        }, 2000)
    }, 2000)
}

export function Jeu({main, header}){

    const [isPlaying, setIsPlaying] = useState(true)
    const [pause, setPause] = useState(false)
    const [bossCall, setBossCall] = useState(false)
    const [restart, setRestart] = useState(0)
    const [count, setCount] = useState(0)

    const monsterRef = useRef()
    const darknessRef = useRef()

    const {player, 
        decreasePlayerHp, initPlayerHp, handleGold, increaseHp, 
        increaseDmg, increaseCritChance, increaseCritDmg, increaseHitChance, 
        increaseMissChance, increaseAttackSpeed, setPlayer} = usePlayer(PLAYER)


    const {monster, decreaseMonsterHp, initMonsterHp, upgradeMonster, setMonster} = useMonster(MONSTER)

    const playerContext = {
        player,
        decreasePlayerHp,
        increaseHp,
        increaseDmg,
        increaseCritChance,
        increaseCritDmg,
        increaseHitChance,
        increaseMissChance,
        increaseAttackSpeed,
        handleGold,
        restart
    }
    const monsterContext = {
        monster,
        decreaseMonsterHp
    }

    const onResize = () =>{
        
        if(window.innerWidth > 600){
            main.current.style.width = window.innerWidth - header.current.clientWidth + "px"
            main.current.style.height = window.innerHeight + "px"
            document.querySelector(".root").style.height = window.innerHeight + "px"
        }
        if(window.innerWidth <= 600){
            main.current.style.width = window.innerWidth + "px"
            main.current.style.height = window.innerHeight - header.current.clientHeight + "px"
        }
        
    }

    useEffect(()=>{
        onResize()
    }, [])

    useEffect(() =>{
        window.addEventListener("resize", onResize)

        return ()=>{
            window.removeEventListener("resize", onResize)
        }
    },[])

    const handlePlaying = useCallback(() =>{
        console.log(isPlaying)
        setIsPlaying(true)
        if(player.hp <= 0){
            initPlayerHp()
            initMonsterHp()
        }
    },[isPlaying])

    const moneyIfDead = count < 200 ? -(player.money-player.money*0.95) : -(player.money-player.money*0.90)

    if(isPlaying && player.hp <= 0){
        setIsPlaying(!isPlaying)
        handleGold(moneyIfDead)
    }

    useEffect(() => {
        const i = count+1
        if(monster.hp <= 0){
            if(bossCall === true){
                maggotWillEatTheBoss(setPause, monsterRef, darknessRef)
                return
            }
            if(player.hp <= 0){
                setIsPlaying(!isPlaying)
                handleGold(moneyIfDead)
                return
            }
            handleGold(monster.money)
            setCount(x => x+1)
            upgradeMonster(i)
            initMonsterHp()
            initPlayerHp()
        }
    }, [monster.hp])

    useEffect(()=>{
        if(bossCall){
            callTheBoss(setPause, monsterRef, setMonster, initPlayerHp)       
        }
    }, [bossCall])

    const handleRestart = ()=>{
        setPlayer(PLAYER)
        setMonster(MONSTER)
        setCount(0)
        setBossCall(false)
        setRestart(restart+1)
        setIsPlaying(true)
        setPause(false)
    }

    return <>
        
     <div className="game" style={pause ? {border: "1px solid red"} : {border: "none"}}>
        {!isPlaying && <Menu onPlaying={handlePlaying} playerHp={player.hp} onRestart={handleRestart}/>}  
        <PlayerContext.Provider value={playerContext}>
        <MonsterContext.Provider value={monsterContext}>
            <Top onPlaying={setIsPlaying} onPause={setPause} pause={pause} count={count} onBossCall={setBossCall} bossCall={bossCall}/>
            <Monster isPlaying={isPlaying} pause={pause} count={count} monsterRef={monsterRef} darknessRef={darknessRef}/>
            <Player isPlaying={isPlaying} pause={pause}/>

        </MonsterContext.Provider>
        </PlayerContext.Provider>
    </div>    
        
    </>
}
