import { Resultat } from "../component/programme/Resultat"
import { InfoGenerale } from "../component/programme/InfoGenerale"
import { useState } from "react"
import "../style/programme/programme.css"

function Programme(){

  const [page, setPage] = useState(0)

  const [info, setInfo] = useState({
    generale: {
      age: null,
      taille: null,
      poids: null,
      sexe: null,
      objectif: null,
      activity: null,
      training: null,
      ligne: null,
      cage: null,
      epaule: null,
      hanche: null
    },
    conseils: {
      cage: null,
      ligne: null,
      epaule: null,
      hanche: null,
      pec: null,
      delto: null,
      dorsaux: null,
      trapeze: null,
      biceps: null,
      triceps: null,
      chaineAnterieur: null,
      chainePosterieur: null,
      program: null
    },
    exercices: {
      pec: [],
      dos: [],
      jambe: [],
      mollets: []
    }
  })

  

  return page === 0 ? 

    <InfoGenerale setInfo={setInfo} setPage={setPage} />

     :
    
    <Resultat info={info}/>

    

}
  
export default Programme