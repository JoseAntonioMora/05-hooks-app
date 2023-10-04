import { useContext } from "react"
import { UserContext } from "./context/UserContext";
import { json } from "react-router-dom";

export const LoginPage = () => {

    const { user, setUser} = useContext( UserContext );
    // console.log(user );

    return (
        <>
            <h1>Login Page</h1>
            <hr />
            <pre>
                { JSON.stringify(user, null, 3)}
            </pre>

            <button className="btn btn-primary" onClick={ () => setUser({ id: 1234, name: 'Antonio', email: 'antonio@gmail.com' }) }>
                Establecer Usuario
            </button>
        </>    
    )
}
