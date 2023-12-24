import Navbar from "./component/Navbar"
import Logo from "./component/Logo"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from "./page/Accueil";
import Programme from "./page/Programme";
import NotFound from "./page/NotFound";
import { useEffect, useRef, useState} from "react";
import { Interet_compose } from "./page/Interet_compose";
import { Jeu } from "./page/Jeu";



const App = () =>{

  const headerRef = useRef()
  const mainRef = useRef()

  const [route, setRoute] = useState(window.location.pathname)

  const mainPosition = function(){

    
    
    if(window.innerWidth >= 600){
      mainRef.current.style.marginLeft = (headerRef.current.clientWidth*2) + "px"
      mainRef.current.style.marginRight = (headerRef.current.clientWidth) + "px"
      mainRef.current.style.width = (window.innerWidth - headerRef.current.clientWidth) + "px"
      return
    }

    if(window.innerWidth < 600){
      mainRef.current.style.marginLeft = 0 + "px"
      mainRef.current.style.marginBottom = (headerRef.current.clientHeight) + "px"
    }
    
    mainRef.current.style.marginLeft = 0 + "px"
  }

  useEffect(()=>{
    if(route != "/albinpoutrain/jeu"){
      mainPosition()
    }

  }, [route])

  useEffect(()=>{
    window.addEventListener("resize", mainPosition)

    return () => {
      window.removeEventListener("resize", mainPosition);
    }
  }, [])


  
  return (<>
      <Router>
        <header className="header" ref={headerRef}>
          <Logo />
          <Navbar onSetRoute={setRoute} />
        </header>
        <main className="main" ref={mainRef}>
          <Routes>
            <Route path="/albinpoutrain/" element={<Accueil/>} />
            <Route path="/albinpoutrain/bourse" element={<Interet_compose/>} />
            <Route path="/albinpoutrain/programme" element={<Programme/>} />
            <Route path="/albinpoutrain/jeu" element={<Jeu main={mainRef} header={headerRef} />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </main>
      </Router>
    </>

  )
}

export default App

