import { Field } from "./Field";
import { useCallback, useRef, useState } from "react";
import { GetValueContext } from "./context";


export function Formulaire({getStateValues}){

    const [state, setState] = useState({
        initial: 10000,
        regulier: 100,
        interet: 10,
        duree: 10,
        compose: "4"
    })

    const initialRef = useRef()
    const regulierRef = useRef()
    const interetRef = useRef()
    const dureeRef = useRef()


    const getValue = useCallback((e) =>{
        const elmt = e.target
        setState(prevState => (
                {
                    ...prevState,
                    [elmt.id]: elmt.value
                }
            )
        )
    }, [])


    const makeValue = useCallback((elem, values, control, type=1) =>{

        if((state[elem.id]===state.duree) && state.duree > 1000){
            elem.classList.add("bad_input")
            control[0] = false
            return
        }else if((state[elem.id]===state.duree) && state.duree <= 1000){
            elem.classList.remove("bad_input")
        }


        if(isNaN(state[elem.id]) || state[elem.id].length === 0){
            elem.classList.add("bad_input")
            console.log(elem)
            control[0] = false     
        }else{
            type === 1 ? 
                values[elem.id] = parseFloat(state[elem.id])
                :
                values[elem.id] = parseInt(state[elem.id])

            elem.classList.remove("bad_input")
        }     
                
    }, [state])

    const controlValue = useCallback(() =>{
        let control = [true]
        let values = {
            initial: "",
            regulier: "",
            interet: "",
            duree: "",
            compose: "4"
        }

        makeValue(initialRef.current, values, control, 1)
        makeValue(regulierRef.current, values, control, 1)
        makeValue(interetRef.current, values, control, 1)
        makeValue(dureeRef.current, values, control, 2)

        if(control[0]) getStateValues(values)
    }, [state])


    const getValueContext = {
        state,
        getValue
    }

    return <div className="bloc bourse">
        <h1>Calcul boursier simple, intérêt composé</h1>
        <div className="formulaire_bourse">
            <GetValueContext.Provider value={getValueContext}>
                <Field id="initial" reference={initialRef} signe={"€"}>Investissement initial</Field>
                <Field id="regulier" reference={regulierRef} signe={"€"}>Investissement par ans</Field>
                <Field id="interet" reference={interetRef} signe={"%"}>Taux d'intéret</Field>
                <Field id="duree" reference={dureeRef} signe={"an(s)"}>Durée d'investissement</Field>
            </GetValueContext.Provider>
        </div>
        <button onClick={controlValue} className="calcul_button">Calculer</button>
        
    </div>
}