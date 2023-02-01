import {
    Routes,
    Route
} from 'react-router-dom'
import { useState, useEffect } from "react"
import Home from './pages/home/Home'
import List from './pages/list/List'
import Tesla from './pages/tesla/Tesla'
import Login from "./pages/login/Login"
import Signup from './pages/Signup/Signup'


export default function App() {

    const [token, setToken] = useState(null)
    const [credentials, setCredentials] = useState({
        name: '',
        email: "",
        password: "",
        isAdmin: false
    });
    const [user, setUser] = useState(null)



    const handleRegister = async (e) => {
        try {
            const response = await fetch('/users', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...credentials })
            })
            const tokenResponse = await response.json();
            setToken(tokenResponse);
            localStorage.setItem("token", JSON.stringify(tokenResponse));
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        const getToken = () => {
            const token = window.localStorage.getItem("token");
            if (!token || token === "null" || token === "undefined") return null;
            const payload = JSON.parse(
                window.atob(decodeURIComponent(token.split(".")[1]))
            );
            if (payload.exp < Date.now() / 1000) {
                window.localStorage.removeItem("token");
                return null;
            }
            return token;
        };
        const token = getToken();
        const data = token
            ? JSON.parse(window.atob(decodeURIComponent(token.split(".")[1]))).user
            : null;
        setUser(data);
    }, []);


    console.log(user)

    return (
        <Routes>
            <Route path='/' element={<Home
                user={user} />} />
            <Route path='/teslas' element={<List />} />
            <Route path='/teslas/:id' element={<Tesla />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Signup
                user={user}
                handleRegister={handleRegister}
                setCredentials={setCredentials} />} />
        </Routes>
    )
}


