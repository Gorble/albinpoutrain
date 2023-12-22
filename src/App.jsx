import Navbar from "./component/Navbar"
import Logo from "./component/Logo"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from "./page/Accueil";
import Programme from "./page/Programme";
import About from "./page/About";
import NotFound from "./page/NotFound";
import { useEffect, useRef} from "react";
import { Interet_compose } from "./page/Interet_compose";
import { Jeu } from "./page/Jeu";



const App = () =>{

  const headerRef = useRef()
  const mainRef = useRef()


  const mainPosition = function(){
    
    if(window.innerWidth >= 600){
      mainRef.current.style.marginLeft = (headerRef.current.clientWidth) + "px"
      return
    }

    if(window.innerWidth < 600){
      mainRef.current.style.marginLeft = 0 + "px"
      mainRef.current.style.marginBottom = (headerRef.current.clientHeight) + "px"
    }
    
    mainRef.current.style.marginLeft = 0 + "px"
  }

  useEffect(()=>{

    mainPosition()

    window.addEventListener("resize", mainPosition)

    return () => {
      window.removeEventListener("resize", mainPosition);
    }

  }, [])


  
  return (<>
      <Router>
        <header className="header" ref={headerRef}>
          <Logo />
          <Navbar />
        </header>
        <main className="main" ref={mainRef}>
          <Routes>
            <Route path="/gorble/" element={<Accueil/>} />
            <Route path="/gorble/bourse" element={<Interet_compose/>} />
            <Route path="/gorble/programme" element={<Programme/>} />
            <Route path="/gorble/jeu" element={<Jeu main={mainRef} header={headerRef}/>} />
            <Route path="/gorble/about" element={<About/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </main>
      </Router>
    </>

  )
}

export default App

