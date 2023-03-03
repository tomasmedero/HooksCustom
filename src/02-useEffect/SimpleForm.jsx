import { useEffect, useState } from "react"
import{ Message} from './Message'

export const SimpleForm = () => {
  
    const [formState, setFormState] = useState({
        username:'strider',
        email:'fernando@hotmail.com'


    })

    const {username,email} = formState;

    const onInputChange = ({target}) => {

        const {name, value} = target;
        setFormState ({
            ...formState, [name] : value

        })
       
    }
 

    
    return (
    <>
    
    <h1>Formulario Simple</h1>
    
    <hr />

    <input 
    type="text"
    className="form-control"
    placeholder="Usuario"
    name="username"
    value={username}
    onChange = {onInputChange}

     />
  
  
      {

        (username === 'strider2') && <Message/>
      }

     <input 
     type="text" 
     name="email" 
     className="form-control mt-2"
     placeholder="fernandito@gmail.com"
     value={email}
     onChange = {onInputChange}
      />
    
      
    </>
  )
}
