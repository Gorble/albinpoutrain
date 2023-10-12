import { useEffect, useRef, useState } from "react"
import cage from "../../../../imgs/program_imgs/cage.JPG"
import clavicule from "../../../../imgs/program_imgs/clavicule.jpg"
import hanche from "../../../../imgs/program_imgs/hanche.JPG"
import ligne from "../../../../imgs/program_imgs/ligne.JPG"

const CARD = {
    cage: {
        img: cage,
        text: `A gauche, de profil on constate que la cage thoracique a peu de volume. 
                Le sternum, os au milieu de la cage, est vertical. C'est une cage thoracique
                plate. Si votre sternum est incliné, votre cage aura plutot tendance à etre
                épaisse.`
    },

    epaule: {
        img: clavicule,
        text: `Il faut regarder ici la largeur de vos clavicules. Plus elles sont larges
                plus vous aurez naturellement l'air carré. Lorsqu'elles sont étroires, 
                vos trapèzes (en rouge), paraîtront plus naturellement bombé.`
    },

    hanche: {
        img: hanche,
        text: `Plus les hanches seront étroites, plus votre taille paraîtra fine.
                L'inverse pour les hanches larges.`
    },

    ligne: {
        img: ligne,
        text: `Il s'agit du ratio entre la taille du torse et des jambes. Pour faire 
                simple, les longilignes ont des jambes et des bras long, image de gauche.
                C'est l'inverse pour les brévilignes.`
    },

    all: "Images et dessins de Frédéric Delavier"
}

export function Help({what}){

    const [size, setSize] = useState(0)

    const helpRef = useRef()

    const card = CARD[what]

    const cardResizing = ()=>{
        if(window.innerWidth > 600){
            const x = window.innerWidth*0.2
            helpRef.current.style.width = x + "px"
            setSize(x)
        }else{
            const x = window.innerWidth*0.8
            helpRef.current.style.width = x + "px"
            setSize(x)
        }
        
        
    }

    useEffect(()=>{

        cardResizing()

        window.addEventListener("resize", cardResizing)

        return () =>{
            window.removeEventListener("resize", cardResizing)
        }
    }, [])


    return <div className="help" ref={helpRef}>
        <img src={card.img} width={size}></img>
        <p className="legend">{CARD.all}</p>
        <p className="text">{card.text}</p>
    </div>
}