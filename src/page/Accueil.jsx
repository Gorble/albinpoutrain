import { useEffect, useRef, useState } from "react"
import "../style/accueil.css"

function Accueil(){

  const [state, setState] = useState(0)

  return <>
  <Navigation state={state} setState={setState} /> 
  {state === 0 ? <Presentation setState={setState}  /> : <About />}
  </>
}

function Navigation({state, setState, navRef}){

  const ACTIVE = {
    backgroundColor: "#00AF0A",
    color: "white"
  }

  const INACTIVE = {
    backgroundColor: "white",
    color: "black"
  }

  return <div className="accueil_navigation" ref={navRef}>

    <button id={0} 
            style={state === 0 ? ACTIVE : INACTIVE}
            onClick={() => setState(()=>0)}
    >Présentation</button>

    <button id={1}
            style={state === 1 ? ACTIVE : INACTIVE}
            onClick={() => setState(()=>1)}
    >A propos du site</button>

  </div>
}

function Presentation ({setState}){

  const whoRef = useRef()
  const howRef = useRef()
  const whenRef = useRef()

  const observerWizzard = (e) => {
    e.forEach(elem => {
      if(elem.isIntersecting){
        elem.target.style.opacity = 1
      }
    })
  }

  useEffect(()=>{
    const obs = new IntersectionObserver(observerWizzard)
    console.log(obs)
    if(whoRef.current != undefined){
      obs.observe(whoRef.current)
    }
    if(howRef.current != undefined){
      obs.observe(howRef.current)
    }
    if(whenRef.current != undefined){
      obs.observe(whenRef.current)
    }

    return () =>{
      obs.disconnect()
    }
  }, [])

  return <>
  <div className="bloc presentation" style={{marginTop: 3.5 + "rem"}} ref={whoRef}>
    <h2>Qui suis-je ?</h2>
    <p>
      Je m'appelle Albin Poutrain, je suis développeur web Front-end. <a href='#' onClick={()=> setState(()=>1)}>Ce site portfolio </a>  
      est développé avec ReactJS.
    </p>

  </div>
  <div className="bloc presentation" ref={howRef}>
    <h2>Comment ai-je appris ?</h2>
    <p>
      Je suis autodidacte, j'ai donc, en toute autonomie, appris grâce à internet par l'intermédiaire de vidéos,
      de recherches Google afin de trouver une solution à un problème donné, et bien évidemment par la pratique.
      Un cheminement classique d'apprentissage se présente ainsi:
    </p>
    <ul>
        <li>Acquisition des base (d'un langage, library, framework)</li>
        <li>Mise en pratique des compétences apprise en développant de petits projets</li>
        <li>Ces probjets soulèvent bien souvent de nouveaux problème qu'il faut apprendre à résoudre</li>
        <li>
          Ces problèmes se résolvent d'abord par la réflexion et, au cas échéant, par l'aide d'informations trouvées
          sur internet donc soit grâce aux documentations, soit sur des forums dans le cas où quelqu'un a déjà été confronté
          à ce problème, soit grâce à des vidéos, soit grâce à TchatGPT.
          Dans tous les cas, la solution doit être comprise avant de l'utiliser.
        </li>
      </ul>

    <p>
          D'abord HTML et CSS puis Javacript pendant une longue periode afin de savoir l'utiliser convenablement. J'ai également touché
          au Back-end avec NodeJS et fastify afin principalement de comprendre le fonctionnement d'une requête avec fetch, donc le
          fonctionnement d'un GET, d'un POST notamment. Tout ceci afin de comprendre un minimum le fonctionnement global d'un site web.
          J'ai également permi à mon serveur d'être accessible au monde en ouvrant le port 80 et en redirigeant le trafic sur mon serveur.
          Cela m'a permi de comprendre le fonctionnement d'internet au global, requête, dns... J'avais utilisé Freenom pour avoir un nom de
          domaine gratuit.
          J'ai ensuite appris ReactJS, le principe de composant me plaît beaucoup, cela permet d'avoir une application bien organisée 
          dont l'affichage est géré dynamiquement directement avec la library et son système d'état.
          J'avais également "connecté" la partie Front-end en React avec mon Back-end NodeJS grâce au proxy afin de faire quelque requêtes
          avec fetch.
      </p> 

  </div>
  <div className="bloc presentation" ref={whenRef}>
    <h2>Comment tout cela a commencé ?</h2>
    <p>
      J'ai écris ma première ligne de code à l'age de 11 ans. A l'époque je voulais développéer des jeux vidéos, type RPG
      alors je me suis mis a apprendre le C++. Cela ma permi de comprendre assez tôt le fonctionnement d'un algorithme, et bien
      entendu de me familiariser au code ( c'était quand même déjà du C++ ). <br></br>
      J'ai finalement arrêté puisque je savais que je ne pourrai pas atteindre mon objectif seul. Développer un RPG en 3D seul 
      m'aurait demandé d'avoir des compétences bien trop variées, que ce soit en code ou en modélisation 3D (pour ne citer que ça),
      en plus de requérir énormément de temps.<br></br><br></br>
      C'est finalement à la fin du lycée pour un projet technique que j'ai de nouveau re touché au code. Pour le coté développement
      web avec du développement Back-end en utilisant php, Front-end uniquement HTML et CSS mais aussi logiciel en utilisant du C++.
      J'ai remarqué ne pas avoir perdu ma capacité de code, et passer d'un langage a un autre n'était pas si compliqué.
      Après le lycée, recherchant un peu de que je voulais faire, j'ai finalement décidé de continuer dans le développement web Front-end
      et d'apprendre par moi-même.<br></br>

    </p>

  </div>
  </>
}

function About(){

  

  const oneRef = useRef()
  const twoRef = useRef()
  const treeRef = useRef()

  const observerWizzard = (e) => {
    e.forEach(elem => {
      if(elem.isIntersecting){
        elem.target.style.opacity = 1
      }
    })
  }

  useEffect(()=>{
    const obs = new IntersectionObserver(observerWizzard)
    if(oneRef.current != undefined){
      obs.observe(oneRef.current)
    }
    if(twoRef.current != undefined){
      obs.observe(twoRef.current)
    }
    if(treeRef.current != undefined){
      obs.observe(treeRef.current)
    }

    return () =>{
      obs.disconnect()
    }

  }, [])

  
  return <>
  <div className="bloc presentation" style={{marginTop: 3.5 + "rem"}} ref={oneRef}>
    <h2>A quoi sert ce site</h2>
    <p>
      Il s'agit d'un site portfolio. Ce site a donc pour objectif de montrer des
      compétence en développement web front-end. 
      Je me suis donc uniquement servi de l'hébergement GitHub puisque je n'ai pas
      développé pour ce site de partie back-end.
    </p>
  </div>

  <div className="bloc presentation" ref={twoRef}>
    <div >
        
      <h2>Le calcul boursier</h2>
      <p>
        Il m'est moi même régulièrement utile, il s'agit d'une petite application
        qui a pour but d'effectuer un calcul d'intérêt simple mais aussi composé.
      </p>

    </div>
    <div >
      <h2>Le programme sportif</h2>
      <p>
        Il s'agit d'un essai d'application qui a pour objectif de générer un programme
        sportif (plutot axé musculation), ainsi qu'une indication des besoin nutritionnels
        journaliers en fonction du poids, de la taille, de l'âge, du taux de sédentarité,
        de l'objectif ainsi que de la morphologie.
        Je concidère qu'il s'agit d'un essai puisque construire un programme qui correspond
        précisément à chaque personne est bien plus complexe.
        Bien entendu, l'application est fonctionnelle et traite correctement les données
        des utilisateurs.
        Concernant l'aspect technique, avoir une base de donnée contenant les informations
        sur les différents exercices, programmes et sur les diètes aurait été bien plus
        convenable. Il aurait alors suffit de faire des requêtes au serveur 
        (avec fetch par exemple) pour récupérer les données utiles uniquement. Mon site,
        ne se concentrant que sur l'aspect front, ne comporte donc pas cet aspect.
      </p>
    </div>
    <div className="tree">
      <h2>Le jeu</h2>
      <p>
        J'ai eu l'idée de créer un petit jeu en premier lieu pour le plaisir, j'avais
        une idée que j'avais envie de réaliser. Cela dit, l'intérêt, avant le divertissement
        ici est de mettre en oeuvre des interractions plus ou moins complexes entre différents
        composant tout en faisant en sorte que ça fonctionne.
      </p>  

    </div>
      
  </div>
    
  <div className="bloc presentation" ref={treeRef}>
    <h2>Le style général du site</h2>
    <p>
      Je me suis inspiré de la plateforme d'investissement en crypto Uphold 
      (attention, pas le site).
    </p>  
  </div>

  </>
}
  
export default Accueil