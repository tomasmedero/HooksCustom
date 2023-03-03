import { useCounter } from "../hooks/useCounter"

export const CounterCustomHooks = () => {
 
 
 
 const {counter,incremental,decremental,reset} = useCounter();
 
 
    return (

    <>
    
    <h1>Counter con Hooks: {counter}</h1>

    <hr />

    <button className="btn btn-primary" onClick={incremental}>+1</button>
    <button className="btn btn-primary" onClick={reset}>Reset</button>
    <button className="btn btn-primary" onClick={decremental}>-1</button>

    
    </>
    
  )
}
