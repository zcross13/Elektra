import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import './login.css'


export default function Login(){
    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined
    })

    const {user, loading, error, dispatch} = useContext(AuthContext)

    const handleChange = (e)=> {
        setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}))
    }

    const handleClick = async e => {
        e.preventDefault()
        dispatch({type: 'LOGIN_START'})
        try{
            const res = await fetch('/auth/login', credentials, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            dispatch({type: 'LOGIN_SUCESS', payload: res.data})
        } catch{
            dispatch({type:'LOGIN_FAILURE', payload:error.response.data})
        }
    }

    console.log(user)

    return(
        <div className='login'>
            <div className='lContainer'>
                <input type='text' placeholder='email' id='email' onChange={handleChange} className='lInput'/>
                <input type='password' placeholder='password' id='password' onChange={handleChange} className='lInput'/>
                <button onClick={handleClick} className='lButton'>Login</button>
                {error && <span>{error.message}</span>}
            </div>
        </div>
    )
}