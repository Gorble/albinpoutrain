import { Link } from 'react-router-dom';
import accueil_ico from "../imgs/accueil.png"
import bourse_ico from "../imgs/bourse.png"
import programme_ico from "../imgs/programme.png"
import about_ico from "../imgs/about.png"
import "../style/component/navbar.css"
import { useCallback, useState } from 'react';

function Navbar() {

  
  const [active, setActive] = useState(window.location.pathname)

  const handleClick = useCallback((e) =>{
    setActive(e.target.dataset.to)
  }, [])

  return (
    <nav  className='navbar'>
      <ul>
        <li>
          <Link to="/gorble/"  >
            <img src={accueil_ico} alt="logo de l'accueil" data-to="/gorble/" onClick={handleClick} className={active === "/gorble/" ? "active" : ""}/>
          </Link>
        </li>

        <li>
          <Link to="/gorble/bourse" >
            <img src={bourse_ico} alt="" data-to="/gorble/bourse" onClick={handleClick} className={active === "/gorble/bourse" ? "active" : ""}/>
          </Link>
        </li>

        <li>
          <Link to="/gorble/programme" >
            <img src={programme_ico} alt="" data-to="/gorble/programme" onClick={handleClick} className={active === "/gorble/programme" ? "active" : ""}/>
          </Link>
        </li>

        <li>
          <Link to="/gorble/about"  >
            <img src={about_ico} alt="" data-to="/gorble/about" onClick={handleClick} className={active === "/gorble/about" ? "active" : ""}/>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
