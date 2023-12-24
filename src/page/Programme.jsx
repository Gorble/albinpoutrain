import { Suspense, lazy, useState } from "react"
import "../style/programme/programme.css"

function Programme(){

  const [page, setPage] = useState("info")

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


  if(page === "info"){
    const InfoGeneraleLazy = lazy(() => import("../component/programme/InfoGenerale"))
    return <Suspense>
      <InfoGeneraleLazy setInfo={setInfo} setPage={setPage}></InfoGeneraleLazy>
    </Suspense>
  }
  if(page === "resultat"){
    const ResultatLasy = lazy(()=> import("../component/programme/Resultat"))
    return <Suspense>
          <ResultatLasy info={info}/>
    </Suspense>
  }

  
    

}
  
export default Programme