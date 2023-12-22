
import { useState } from "react"


function useIncrement(initial = 0, step = 1){
  const [state, setState] = useState(initial)
  
  const increment = () => {
    setState(state+step)
  }
  const decrement = () => {
    setState(state-step)
  }

  return [state, increment, decrement]
}

function About(){

  const [value, increment, decrement] = useIncrement(10, 2)


  return <>
    <h1>About</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    {value}
  </>
  
}
  
export default About