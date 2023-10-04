import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, AboutPage, LoginPage } from "./index"

export const MainApp = () => {
    return (
        <>
            <h1>Main Page</h1>
            <hr />

            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="about" element={ <AboutPage /> } />
                <Route path="login" element={ <LoginPage /> } />

                {/* <Route path="/*" element={ <LoginPage /> } /> */}
                <Route path="/*" element={ <Navigate to="/" /> } />
            </Routes>

        </>    
    )
}
