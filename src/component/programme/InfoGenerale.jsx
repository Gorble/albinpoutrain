import { useRef, useState} from "react"
import { Field } from "./component/form/Field"
import { Range } from "./component/form/Range"
import { Radio } from "./component/form/Radio"
import { Morphologie } from "./component/Morphologie"
import { Help } from "./component/form/Help"

import { exerciceAssignation } from "./function/exerciceAssignation"


const controlField = function(ref, canSend){
    
    if(isNaN(ref.current.value) || ref.current.value===""){
        canSend[0] = false
        ref.current.classList.add("bad_input")
    }else ref.current.classList.remove("bad_input")
}



export function InfoGenerale ({setInfo, setPage}){


    const [sexeState, setSexeState] = useState("h")
    const [objectifState, setObjectifState] = useState("pdm")
    const [activityState, setActivityState] = useState("low")
    const [ligneState, setLigneState] = useState("longiligne")
    const [cageState, setCageState] = useState("plate")
    const [epauleState, setEpauleState] = useState("large")
    const [hancheState, setHancheState] = useState("Large")

    const [help, setHelp] = useState("ligne")

    const ageRef = useRef()
    const tailleRef = useRef()
    const poidsRef = useRef()

    const submit = (e) =>{
        e.preventDefault()
        const datas = new FormData(e.target)

        let canSend = [true]
 
        controlField(ageRef, canSend)
        controlField(tailleRef, canSend)
        controlField(poidsRef, canSend)

        if(canSend[0]){
            setInfo(prevInfo => ({
                ...prevInfo, 
                generale: {
                    age: parseInt(datas.get("age")),
                    taille: parseInt(datas.get("taille")),
                    poids: parseInt(datas.get("poids")),
                    sexe: sexeState,
                    objectif: objectifState,
                    training: parseInt(datas.get("nbTraining")),
                    activity: activityState,
                    ligne: ligneState,
                    cage: cageState,
                    epaule: epauleState,
                    hanche: hancheState
                }
            }))


            setPage(page => page+1) 

        }

    }

    return <>
        <form className="info_generale" onSubmit={submit}>

            <div className="bloc program_field">
                <h3>Quelques infos perso...</h3>
                <Field id={"age"} reference={ageRef} signe={"an.s"}>{"Age"}</Field>
                <Field id={"taille"} reference={tailleRef} signe={"cm"}>{"Taille"}</Field>
                <Field id={"poids"} reference={poidsRef} signe={"kg"}>{"Poids"}</Field>
                <div className="sexe_bloc">
                    <Radio id={"h"} name={"sexe"} state={sexeState} onCheck={setSexeState}>
                            Homme
                    </Radio>
                    <Radio id={"f"} name={"sexe"} state={sexeState} onCheck={setSexeState}>
                            Femme
                    </Radio>
                </div>
                <div className="objectif">
                    <h3>...et ton objectif</h3>
                    <ul className="objectif_list">
                        <li>
                            <Radio id={"pdm"} name={"objectif"} state={objectifState} onCheck={setObjectifState}>
                                Prise de poids/ muscle
                            </Radio>
                        </li>
                        <li>
                            <Radio id={"seche"} name={"objectif"} state={objectifState} onCheck={setObjectifState}>
                                Maigrir
                            </Radio>
                        </li>
                    </ul>
                </div>
                
                
            </div>

            
            <div className="bloc program_activity">
                <h3>Dans la vie en général je...</h3>
                <ul className="radio_organizer">
                    <li>
                        <Radio id={"low"} name={"activity"} state={activityState} onCheck={setActivityState}>
                            Bouge très peu (assis la plupart du temps et je marche peu)
                        </Radio>
                    </li>
                    <li>
                        <Radio id={"medium"} name={"activity"} state={activityState} onCheck={setActivityState}>
                            Bouge (souvent debout - métier debout, marche etc...)
                        </Radio>
                    </li>
                    <li>
                        <Radio id={"high"} name={"activity"} state={activityState} onCheck={setActivityState}>
                            Bouge beaucoup (activité journalière physique - metier physique)
                        </Radio>
                    </li>
                </ul>
                
            </div>
                
            <div className="bloc program_training">
                <Range id={"nbTraining"} ><h3>Nombre d'entraînement désiré</h3></Range>
            </div>

            <div className="bloc program_morpho">
                <h3>Analyse morphologique rapide</h3>
                
                <p>
                    La section suivante aura pour but de déterminer votre morphologie, vous deriez donc
                    prendre des photos de vous au moins de face et de profil 
                    (ou vous regarder dans le miroir dans ces positions)
                </p>


                <Morphologie 
                    infos={{
                        id: ["longiligne", "breviligne"],
                        name: "ligne"
                        }}
                        
                    state={ligneState}
                    onCheck={setLigneState}
                    onClickHelp={setHelp}
                >Commençons par votre ligne...</Morphologie>

                <Morphologie 
                    infos={{
                        id: ["plate", "epaisse"],
                        name: "cage"
                        }}
                            
                    state={cageState}
                    onCheck={setCageState}
                    onClickHelp={setHelp}
                >Ensuite, la forme de votre cage thoracique...</Morphologie>

                <Morphologie 
                    infos={{
                        id: ["large", "etroite"],
                        name: "epaule"
                        }}
                            
                    state={epauleState}
                    onCheck={setEpauleState}
                    onClickHelp={setHelp}
                >Puis la largeur de vos épaules</Morphologie>

                <Morphologie 
                    infos={{
                        id: ["Large", "Etroite"],
                        name: "hanche"
                        }}
                            
                    state={hancheState}
                    onCheck={setHancheState}
                    onClickHelp={setHelp}
                >Enfin votre largeur de hanche</Morphologie>

                <Help what={help}></Help>

                <button className="send_button">Envoyer</button>
            </div>
   
            
            
        </form>
        


    </>
}
