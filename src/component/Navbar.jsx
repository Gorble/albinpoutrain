import { Link } from 'react-router-dom';
import accueil_ico from "../imgs/accueil.png"
import bourse_ico from "../imgs/bourse.png"
import programme_ico from "../imgs/programme.png"
import about_ico from "../imgs/about.png"
import "../style/component/navbar.css"
import { useEffect, useState } from 'react';

function Navbar() {

  const [page, setPage] = useState(window.location.pathname)

  const activePage = function(){
    const chemin = window.location.pathname
    document.querySelectorAll(".navbar img").forEach(link =>{
      link.dataset.to === chemin ? link.classList.add("active") : link.classList.remove("active")
    })
  }

  useEffect(()=>{
    activePage()
  }, [])

  const active = function(e){
    document.querySelectorAll(".navbar img").forEach(link =>{
      link.classList.remove("active")
    })
    e.target.classList.add("active")
  }

  return (
    <nav  className='navbar'>
      <ul>
        <li><Link to="/"  onClick={active}><img src={accueil_ico} alt="logo de l'accueil" data-to="/" /></Link></li>
        <li><Link to="/bourse" onClick={active}><img src={bourse_ico} alt="" data-to="/bourse" /></Link></li>
        <li><Link to="/programme" onClick={active}><img src={programme_ico} alt="" data-to="/programme" /></Link></li>
        <li><Link to="/about"  onClick={active}><img src={about_ico} alt="" data-to="/about" /></Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
