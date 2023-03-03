import { useEffect,useState } from "react"
import { useForm } from "../hooks/useForm"


export const SimpleFormCustom = () => {
  
  const {formState, onInputChange, onResetForm} =useForm({

    username:'',
    email:'',
    password:''

  })
 

  const {username,email,password} = formState;

    
    return (
    <>
    
    <h1>Formulario Custom Hook</h1>
    
    <hr />

    <input 
    type="text"
    className="form-control"
    placeholder="Usuario"
    name="username"
    value={username}
    onChange = {onInputChange}

     />
  
  
     
     <input 
     type="text" 
     name="email" 
     className="form-control mt-2"
     placeholder="fernandito@gmail.com"
     value={email}
     onChange = {onInputChange}
      />

<input 
     type="password" 
     name="password" 
     className="form-control mt-2"
     placeholder="Contraseña"
     value={password}
     onChange = {onInputChange}
      />
    

    <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>
      
    </>
  )
}
