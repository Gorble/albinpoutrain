import { useEffect, useRef, useState } from "react"



export function Menu({onPlaying, playerHp, onRestart}){

    

    const [state, setState] = useState(0)

    const msg = playerHp <= 0 ? "Mort" : "Menu"


    if(state === 1){
        return <div className="modal_menu" >
            <Goal setState={setState}/>
        </div>
    }

    if(state === 2){
        return <div className="modal_menu" >
            <Tip setState={setState}/>
        </div>
    }

    if(state === 3){
        return <div className="modal_menu" >
            <History setState={setState}/>
        </div>
    }



    return <div className="modal_menu" >
        <MainMenu onPlaying={onPlaying} onRestart={onRestart} msg={msg} setState={setState}/>     
    </div>
}

function MainMenu({onPlaying, onRestart, msg, setState}){
    return <div className="menu">
            <h2>{msg}</h2>
            <button onClick={() => onPlaying(true)} >Lancer</button>
            <button onClick={onRestart}>Recommencer</button>
            <button onClick={() => setState(3)}>Histoire</button>
            <button onClick={() => setState(1)}>Objectif</button>
            <button onClick={() => setState(2)}>Tips</button>
        </div>
}

function Goal({setState}){
    return <div className="menu">
        
            <h2>Objectif</h2>
            <p>
                Vous devez évoluer jusqu'à être capable de combattre Carrux
                afin de sauver la prairie d'une fin attroce.
            </p>
            <button onClick={()=> setState(0)}>Retour</button>
        </div>
}

function Tip({setState}){
    return <div className="menu">
        
            <h2>Tips</h2>
           <ul>
                <li>
                    Le carré rouge s'appelle Rubixor.
                </li>
                <li>
                    Mettez sur pause, grâce au boutton situé en haut à gauche, pour
                    acheter vos améliorations. 
                </li>
                <li>
                    Mourir vous fait perdre de l'argent.
                </li>
                <li>
                    Rubixor évolue à chaque fois que vous le tuez.
                </li>
           </ul>
                
            
            <button onClick={()=> setState(0)}>Retour</button>
        </div>
}

function History({setState}){

    const titleRef = useRef()
    const buttonRef = useRef()
    const textRef = useRef()
    const menuRef = useRef()

    const resize = () => {
        const title = titleRef.current.clientHeight
        const button = buttonRef.current.clientHeight

        const textSize = (window.innerHeight/2) - (title + button)
      
        textRef.current.style.height = textSize + "px"
    }

    useEffect(()=>{
        resize()

        window.addEventListener("resize", resize)

        return () => window.removeEventListener("resize", resize)
    }, [])

    console.log()

    return <div className="menu" >
        
            <h2 ref={titleRef}>Histoire</h2>
            <p style={{overflowY: "scroll"}} ref={textRef}>
            Il était une fois, au cœur de la paisible Prairie d'Éclatiris, 
            un lieu magique où les fleurs éclataient de couleurs vives et les papillons 
            jouaient à cache-cache parmi les rayons du soleil. 
            Tout était en parfaite harmonie jusqu'à ce qu'un jour, 
            un méchant carré rouge du nom de Rubixor apparaisse, 
            menaçant de détruire la beauté de la prairie avec sa forme géométrique sinistre.
            <br></br> <br></br>
            À la tête de cette menace carrée se trouvait un gorille redoutable appelé Carrux, 
            le chef carré rouge et le cerveau derrière le plan visant à transformer la Prairie
            d'Éclatiris en une terre carrée sans vie ni couleur.
            <br></br> <br></br>
            Les habitants de la Prairie d'Éclatiris, des créatures adorables et joyeuses, 
            étaient pris de panique. Les lapins cessaient leurs jeux bondissants, 
            les oiseaux suspendaient leur mélodie enchantée, 
            et même les nuages semblaient perdre leur douceur. 
            La prairie était plongée dans une atmosphère carrément sombre.
            <br></br> <br></br>
            Cependant, parmi les habitants, se trouvait un petit escargot déterminé 
            du nom de Brillanto. Connu pour sa lenteur mais aussi pour son intelligence, 
            Brillanto décida de rassembler une équipe improbable pour sauver 
            la Prairie d'Éclatiris.
            <br></br> <br></br>
            Brillanto recruta un groupe hétéroclite comprenant un écureuil acrobate 
            du nom de Volti, une libellule experte en voltige aérienne appelée Ailumi, 
            et un hérisson stratège nommé Piquart. 
            Ensemble, ils élaborèrent un plan brillant pour contrer les intentions maléfiques 
            de Carrux et de son armée de carrés rouges.
            <br></br> <br></br>
            Le jour fatidique arriva. La bataille entre les formes géométriques et les 
            créatures de la prairie commença. Les acrobaties de Volti déconcertèrent 
            les carrés rouges, les voltiges d'Ailumi brouillèrent leur vision avec des 
            éclats de lumière, et les stratégies de Piquart les repoussèrent.
            <br></br> <br></br>
            Finalement, Brillanto affronta le gorille Carrux dans un duel intellectuel. 
            Après un échange épique de pensées stratégiques, Brillanto réussit à convaincre 
            Carrux de la beauté et de la diversité de la Prairie d'Éclatiris, 
            le persuadant d'abandonner son plan diabolique.
            <br></br> <br></br>
            Carrux, touché par la sagesse de Brillanto, ordonna à ses troupes de se retirer. 
            La Prairie d'Éclatiris retrouva sa splendeur, 
            les habitants reprirent leurs activités joyeuses, 
            et même Rubixor devint une forme bienveillante, 
            désireux de participer à la vie harmonieuse de la prairie.
            <br></br> <br></br>
            Et ainsi, la Prairie d'Éclatiris retrouva sa tranquillité, 
            grâce à l'intelligence, à la détermination et à la sagesse d'un petit escargot 
            nommé Brillanto. 
            La leçon de cette histoire improbable était que même dans les prairies les plus 
            pacifiques, il pouvait y avoir des menaces carrément étranges, 
            mais avec un esprit d'équipe et de la perspicacité, 
            même les méchants carrés pouvaient changer pour le mieux.
            
            </p>
            <button onClick={()=> setState(0)} ref={buttonRef}>Retour</button>
        </div>
}

/*

Tout était en parfaite harmonie jusqu'à ce qu'un jour, 
            un méchant carré rouge du nom de Rubixor apparaisse, 
            menaçant de détruire la beauté de la prairie avec sa forme géométrique sinistre.

            À la tête de cette menace carrée se trouvait un gorille redoutable appelé Carrux, 
            le chef carré rouge et le cerveau derrière le plan visant à transformer la Prairie
            d'Éclatiris en une terre carrée sans vie ni couleur.

            Les habitants de la Prairie d'Éclatiris, des créatures adorables et joyeuses, 
            étaient pris de panique. Les lapins cessaient leurs jeux bondissants, 
            les oiseaux suspendaient leur mélodie enchantée, 
            et même les nuages semblaient perdre leur douceur. 
            La prairie était plongée dans une atmosphère carrément sombre.

            Cependant, parmi les habitants, se trouvait un petit escargot déterminé 
            du nom de Brillanto. Connu pour sa lenteur mais aussi pour son intelligence, 
            Brillanto décida de rassembler une équipe improbable pour sauver 
            la Prairie d'Éclatiris.

            Brillanto recruta un groupe hétéroclite comprenant un écureuil acrobate 
            du nom de Volti, une libellule experte en voltige aérienne appelée Ailumi, 
            et un hérisson stratège nommé Piquart. 
            Ensemble, ils élaborèrent un plan brillant pour contrer les intentions maléfiques 
            de Carrux et de son armée de carrés rouges.

            Le jour fatidique arriva. La bataille entre les formes géométriques et les 
            créatures de la prairie commença. Les acrobaties de Volti déconcertèrent 
            les carrés rouges, les voltiges d'Ailumi brouillèrent leur vision avec des 
            éclats de lumière, et les stratégies de Piquart les repoussèrent.

            Finalement, Brillanto affronta le gorille Carrux dans un duel intellectuel. 
            Après un échange épique de pensées stratégiques, Brillanto réussit à convaincre 
            Carrux de la beauté et de la diversité de la Prairie d'Éclatiris, 
            le persuadant d'abandonner son plan diabolique.

            Carrux, touché par la sagesse de Brillanto, ordonna à ses troupes de se retirer. 
            La Prairie d'Éclatiris retrouva sa splendeur, 
            les habitants reprirent leurs activités joyeuses, 
            et même Rubixor devint une forme bienveillante, 
            désireux de participer à la vie harmonieuse de la prairie.

            Et ainsi, la Prairie d'Éclatiris retrouva sa tranquillité, 
            grâce à l'intelligence, à la détermination et à la sagesse d'un petit escargot 
            nommé Brillanto. 
            La leçon de cette histoire improbable était que même dans les prairies les plus 
            pacifiques, il pouvait y avoir des menaces carrément étranges, 
            mais avec un esprit d'équipe et de la perspicacité, 
            même les méchants carrés pouvaient changer pour le mieux.

*/