import { useState } from "react"

export const useCounter = (initValue = 10) => {

        const [counter, setCounter] = useState(initValue)
    


        const incremental = () => {
            setCounter (counter + 1)

        }

        const decremental = () => {
            
            if (counter === 0) {
                return;
                
            }
            setCounter (counter - 1)

        }

        const reset = () => {
            setCounter (initValue)

        }

        return{

            counter,
            incremental,
            decremental,
            reset

        }

}