import Navbar from "./component/Navbar"
import Logo from "./component/Logo"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from "./page/Accueil";
import Programme from "./page/Programme";
import About from "./page/About";
import NotFound from "./page/NotFound";
import { useLayoutEffect, useRef} from "react";
import { Interet_compose } from "./page/Interet_compose";



const App = () =>{

  const header = useRef()
  const main = useRef()


  const mainPosition = function(){
    
    if(window.innerWidth >= 600){
      main.current.style.marginLeft = (header.current.clientWidth + 10) + "px"
      return
    }

    if(window.innerWidth < 600){
      main.current.style.marginLeft = 0 + "px"
      main.current.style.marginBottom = (header.current.clientHeight + 10) + "px"
    }
    
    main.current.style.marginLeft = 0 + "px"
  }

  useLayoutEffect(()=>{

    mainPosition()

    window.addEventListener("resize", mainPosition)

    return () => {
      window.removeEventListener("resize", mainPosition);
    }

  }, [])

  
  return (<>
      <Router>
        <header className="header" ref={header}>
          <Logo />
          <Navbar />
        </header>
        <main className="main" ref={main}>
          <Routes>
            <Route path="/gorble/" element={<Accueil/>} />
            <Route path="/gorble/bourse" element={<Interet_compose/>} />
            <Route path="/gorble/programme" element={<Programme/>} />
            <Route path="/gorble/about" element={<About/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </main>
      </Router>
    </>

  )
}

export default App

