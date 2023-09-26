import { useEffect, useState } from "react"
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {   
    
    const { formState, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    });

    const { username, email, password } = formState;
    
/*     useEffect( () => {
        console.log("useEffect called")
    }, []);

    useEffect( () => {
        console.log("Formstate called")
    }, [formState]);

    useEffect( () => {
        console.log("Email called")
    }, [email]); */
    
    
    
    return (
        <>
            <h1>Formulario con custom Hook</h1>
            <hr />
            
            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />
            
            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="example@hotmail.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

            <input 
                type="password" 
                className="form-control mt-2"
                placeholder="contraseña"
                name="password"
                value={ password }
                onChange={ onInputChange }
            />

            <button className="btn btn-primary mt-2" onClick={ onResetForm }>Reset</button>
            
            {/* {                
                (username === 'antonio2') && <Message />
            } */}
        </>
    )
}
