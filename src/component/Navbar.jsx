import { Link } from 'react-router-dom';
//import accueil_ico from "../imgs/accueil.png"
import AccueilSVG from "../imgs/AccueilSVG.jsx"
import BourseSVG from "../imgs/BourseSVG.jsx"
import ExerciceSVG from "../imgs/ExerciceSVG.jsx"
import JeuSVG from "../imgs/JeuSVG.jsx"
import "../style/component/navbar.css"
import { useCallback,  useState } from 'react';
import { LinkName } from './LinkName';

function Navbar({onSetRoute}) {

  
  const [active, setActive] = useState(window.location.pathname)


  

  const handleClick = useCallback((e) =>{
    
    setActive(e.currentTarget.dataset.to)
    onSetRoute(e.currentTarget.dataset.to)
    
  }, [])

  const mouseFlyOver = (e) =>{
    if(window.innerWidth >= 600){
      const div = e.currentTarget.querySelector("div")
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
//<img src={accueil_ico} alt="logo de l'accueil" data-to="/albinpoutrain/" ref={testRef} onClick={handleClick} className={active === "/albinpoutrain/" ? "active" : ""}/>

  return (
    <nav  className='navbar' >
      <ul>
        <li onMouseOver={mouseFlyOver} onMouseLeave={mouseFlyOut}>
          <Link to="/albinpoutrain/" onClick={handleClick} data-to="/albinpoutrain/">
            <AccueilSVG whoActive={active}/>
          </Link>
          <LinkName>Accueil</LinkName>
        </li>

        <li onMouseOver={mouseFlyOver} onMouseLeave={mouseFlyOut}>
          <Link to="/albinpoutrain/bourse" onClick={handleClick} data-to="/albinpoutrain/bourse" >
            <BourseSVG whoActive={active}/>
          </Link>
          <LinkName>Calcul boursier</LinkName>
        </li>

        <li onMouseOver={mouseFlyOver} onMouseLeave={mouseFlyOut}>
          <Link to="/albinpoutrain/programme" onClick={handleClick} data-to="/albinpoutrain/programme" >
           <ExerciceSVG whoActive={active}/>
          </Link>
          <LinkName>Générateur de programme sportif</LinkName>
        </li>

        <li onMouseOver={mouseFlyOver} onMouseLeave={mouseFlyOut}>
          <Link to="/albinpoutrain/jeu" onClick={handleClick} data-to="/albinpoutrain/jeu">
            <JeuSVG whoActive={active}/>
          </Link>
          <LinkName>Jeu</LinkName>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
