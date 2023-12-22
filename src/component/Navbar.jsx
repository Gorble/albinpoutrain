import { Link } from 'react-router-dom';
import accueil_ico from "../imgs/accueil.png"
import bourse_ico from "../imgs/bourse.png"
import programme_ico from "../imgs/programme.png"
import jeu_ico from "../imgs/jeu.png"
import about_ico from "../imgs/about.png"
import "../style/component/navbar.css"
import { useCallback,  useState } from 'react';
import { LinkName } from './LinkName';

function Navbar() {

  
  const [active, setActive] = useState(window.location.pathname)

  const handleClick = useCallback((e) =>{
    setActive(e.target.dataset.to)
  }, [])

  const mouseFlyOver = (e) =>{
    const div = e.currentTarget.querySelector("div")
    div.style.top = (e.currentTarget.offsetHeight-div.offsetHeight)/2 + "px"
    div.style.right = -(e.currentTarget.offsetWidth+div.offsetWidth) + "px"
    div.style.opacity = 1
  }

  const mouseFlyOut = (e) =>{
    const div = e.currentTarget.querySelector("div")
    div.style.opacity = 0
  }

  return (
    <nav  className='navbar'>
      <ul>
        <li onMouseOver={mouseFlyOver} onMouseLeave={mouseFlyOut}>
          <Link to="/gorble/"  >
            <img src={accueil_ico} alt="logo de l'accueil" data-to="/gorble/" onClick={handleClick} className={active === "/gorble/" ? "active" : ""}/>
          </Link>
          <LinkName>Accueil</LinkName>
        </li>

        <li onMouseOver={mouseFlyOver} onMouseLeave={mouseFlyOut}>
          <Link to="/gorble/bourse" >
            <img src={bourse_ico} alt="" data-to="/gorble/bourse" onClick={handleClick} className={active === "/gorble/bourse" ? "active" : ""}/>
          </Link>
          <LinkName>Calcul boursier</LinkName>
        </li>

        <li onMouseOver={mouseFlyOver} onMouseLeave={mouseFlyOut}>
          <Link to="/gorble/programme" >
            <img src={programme_ico} alt="" data-to="/gorble/programme" onClick={handleClick} className={active === "/gorble/programme" ? "active" : ""}/>
          </Link>
          <LinkName>Générateur de programme sportif</LinkName>
        </li>

        <li onMouseOver={mouseFlyOver} onMouseLeave={mouseFlyOut}>
          <Link to="/gorble/jeu" >
            <img src={jeu_ico} alt="" data-to="/gorble/jeu" onClick={handleClick} className={active === "/gorble/jeu" ? "active" : ""}/>
          </Link>
          <LinkName>Jeu</LinkName>
        </li>

        <li onMouseOver={mouseFlyOver} onMouseLeave={mouseFlyOut}>
          <Link to="/gorble/about"  >
            <img src={about_ico} alt="" data-to="/gorble/about" onClick={handleClick} className={active === "/gorble/about" ? "active" : ""}/>
          </Link>
          <LinkName>A propos</LinkName>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
