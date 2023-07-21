import { useContext, useRef } from "react"
import { GetInfoContext } from "./context"

export function InfoGenerale (){

    const {info, setInfo, setPage} = useContext(GetInfoContext)

    const ageRef = useRef()

    const sendValue = () =>{
        let canSend = true
        /*!isNaN(ageRef.current.value) ? setInfo(prevInfo => ({
                ...prevInfo, 
                generale: {
                    age: parseInt(ageRef.current.value)
                }
            })) : canSend = false*/

        if(isNaN(ageRef.current.value) || ageRef.current.value===""){
            canSend = false
            ageRef.current.classList.add("bad_input")
        }else ageRef.current.classList.remove("bad_input")

        if(canSend){
            setInfo(prevInfo => ({
                ...prevInfo, 
                generale: {
                    age: parseInt(ageRef.current.value)
                }
            }))

            setPage(page => page+1)
        }

    }

    return <>
    <div className="bloc">
        <div className="field">
            <label htmlFor="age">Age: </label>
            <input type="text" name="age" id="age" ref={ageRef} placeholder="18" ></input>
        </div>
        <div className="field">
            <label htmlFor="taille">Age: </label>
            <input type="text" name="age" id="age" ref={ageRef} placeholder="18" ></input>
        </div>
        <div className="field">
            <label htmlFor="poids">Age: </label>
            <input type="text" name="age" id="age" ref={ageRef} placeholder="18" ></input>
        </div>


        <h1>General</h1>
        <button onClick={sendValue}>Envoyer</button>
    </div>

    </>
}