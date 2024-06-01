import Navbar from "./component/Navbar"
import Logo from "./component/Logo"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from "./page/Accueil";
import Programme from "./page/Programme";
import NotFound from "./page/NotFound";
import { useContext, useEffect, useRef, useState} from "react";
import { Interet_compose } from "./page/Interet_compose";
import { Jeu } from "./page/Jeu";
import { ThemeContext} from "./component/contexts/ThemeContext";
import { ThemeSwitcher } from "./component/ThemeSwitcher";



const App = () =>{

  const headerRef = useRef()
  const mainRef = useRef()

  const [route, setRoute] = useState(window.location.pathname)

  const {theme} = useContext(ThemeContext)

  theme === "light" ? document.body.className = "body_light" : document.body.className = "body_dark" 



  const mainPosition = function(){

    
    
    if(window.innerWidth >= 600){
      mainRef.current.style.marginLeft = (headerRef.current.clientWidth*2) + "px"
      mainRef.current.style.marginRight = (headerRef.current.clientWidth) + "px"
      mainRef.current.style.width = (window.innerWidth - headerRef.current.clientWidth) + "px"
      mainRef.current.style.height = "unset"
      return
    }

    if(window.innerWidth < 600){
      mainRef.current.style.marginLeft = 0 + "px"
      mainRef.current.style.marginRight = 0 + "px"
      mainRef.current.style.marginBottom = (headerRef.current.clientHeight) + "px"
      mainRef.current.style.height = "unset"
      //mainRef.current.style.width = window.innerWidth + "px"
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




  const a = "r"
  
  return (<>
      <Router>
          <header className={`header bloc_${theme}`} ref={headerRef}>
            <Logo onSetRoute={setRoute} />
            <Navbar onSetRoute={setRoute} route={route}/>
            <ThemeSwitcher></ThemeSwitcher>
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

