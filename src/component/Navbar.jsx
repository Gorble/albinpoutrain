import { Link } from 'react-router-dom';
import accueil_ico from "../imgs/accueil.png"
import bourse_ico from "../imgs/bourse.png"
import programme_ico from "../imgs/programme.png"
import about_ico from "../imgs/about.png"
import "../style/component/navbar.css"
import { useLayoutEffect, useState } from 'react';

function Navbar() {

  const [page, setPage] = useState(window.location.pathname)

  const activePage = function(){
    const chemin = window.location.pathname
    document.querySelectorAll(".navbar img").forEach(link =>{
      link.dataset.to === chemin ? link.classList.add("active") : link.classList.remove("active")
    })
  }

  useLayoutEffect(()=>{
    /*const linkTimout = setTimeout(activePage, 500)*/
    activePage()
    /*return ()=> clearTimeout(linkTimout)*/
    
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
        <li><Link to="/gorble/"  onClick={active}><img src={accueil_ico} alt="logo de l'accueil" data-to="/gorble/" /></Link></li>
        <li><Link to="/gorble/bourse" onClick={active}><img src={bourse_ico} alt="" data-to="/gorble/bourse" /></Link></li>
        <li><Link to="/gorble/programme" onClick={active}><img src={programme_ico} alt="" data-to="/gorble/programme" /></Link></li>
        <li><Link to="/gorble/about"  onClick={active}><img src={about_ico} alt="" data-to="/gorble/about" /></Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
