import { Resultat } from "../component/programme/Resultat"
import { InfoGenerale } from "../component/programme/InfoGenerale"
import { InfoMorpho } from "../component/programme/InfoMorpho"
import { useState } from "react"
import { GetInfoContext } from "../component/programme/context"
import "../style/programme/programme.css"

function Programme(){

  const Pages = [<InfoGenerale/>, <InfoMorpho/>, <Resultat/>]

  const [page, setPage] = useState(0)

  const [info, setInfo] = useState({
    generale: {
      age: 18,
      taille: null,
      poids: null,
    }
  })

  const infos = {
    info,
    setInfo,
    setPage
  }


  return <>
      <GetInfoContext.Provider value={infos}>
        {Pages[page]}
      </GetInfoContext.Provider>
  
      {/*state < 2 ? <button onClick={nextPage}>Envoyer</button> : ""*/}
      {info.generale.age}

    </>

}
  
export default Programme