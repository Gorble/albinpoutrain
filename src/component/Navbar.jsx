import { Link } from 'react-router-dom';
import AccueilSVG from "../imgs/AccueilSVG.jsx"
import BourseSVG from "../imgs/BourseSVG.jsx"
import ExerciceSVG from "../imgs/ExerciceSVG.jsx"
import JeuSVG from "../imgs/JeuSVG.jsx"
import "../style/component/navbar.css"
import { useCallback, useEffect, useRef } from 'react';
import { LinkName } from './LinkName';


function Navbar({onSetRoute, route}) {

  const ulRef = useRef()

  const LINK_COLOR_ACTIVE = "#00BD0B"
  const LINK_COLOR_INACTIVE = "#FFF"
  const LINK_DRAW_ACTIVE = "#FFF"
  const LINK_DRAW_INACTIVE = "#000000"
  const LINK_STROKE_ACTIVE = "white"
  const LINK_STROKE_INACTIVE = "black"
  const LINK_STROKEWIDTH_ACTIVE = 8
  const LINK_STROKEWIDTH_INACTIVE = 0



  const handleClick = useCallback((e) =>{
    
    onSetRoute(e.currentTarget.dataset.to)
    
  }, [])

  useEffect(()=>{
    const li = ulRef.current.querySelectorAll("li")
    li.forEach(item => {
      const linkName = item.querySelector(".link_name")
      linkName.style.right = -(1000) + "px"
    })

  }, [])

  const mouseFlyOver = (e) =>{
    if(window.innerWidth >= 600){
      const div = e.currentTarget.querySelector(".link_name")
      div.style.display = "block"
      div.style.top = (e.currentTarget.offsetHeight-div.offsetHeight)/2 + "px"
      div.style.right = -(e.currentTarget.offsetWidth+div.offsetWidth) + "px"

      div.style.opacity = 1
    }
    
  }

  const mouseFlyOut = (e) =>{
    if(window.innerWidth >= 600){
      const div = e.currentTarget.querySelector("div")
      div.style.opacity = 0
      setTimeout(()=>{
        div.style.display = "none"
      },300)
    }
    
    
  }

  return (
    <nav  className='navbar' >
      <ul ref={ulRef}>
        <li onMouseOver={mouseFlyOver} onMouseLeave={mouseFlyOut} id="1">
          <Link to="/albinpoutrain/" onClick={handleClick} data-to="/albinpoutrain/">
            <AccueilSVG whoActive={route}/>
          </Link>
          <LinkName>Accueil</LinkName>
        </li>

        <li onMouseOver={mouseFlyOver} onMouseLeave={mouseFlyOut} id="2">
          <Link to="/albinpoutrain/bourse" onClick={handleClick} data-to="/albinpoutrain/bourse" >
            <BourseSVG whoActive={route}/>
          </Link>
          <LinkName>Calcul boursier</LinkName>
        </li>

        <li onMouseOver={mouseFlyOver} onMouseLeave={mouseFlyOut} id="3">
          <Link to="/albinpoutrain/programme" onClick={handleClick} data-to="/albinpoutrain/programme" >
           <ExerciceSVG whoActive={route}/>
          </Link>
          <LinkName>Générateur de programme de musculation</LinkName>
        </li>

        <li onMouseOver={mouseFlyOver} onMouseLeave={mouseFlyOut} id="4">
          <Link to="/albinpoutrain/jeu" onClick={handleClick} data-to="/albinpoutrain/jeu">
            <JeuSVG whoActive={route}/>
          </Link>
          <LinkName>Jeu</LinkName>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
