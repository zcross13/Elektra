import "./login.css"
import {AuthContext} from "../../context/AuthContext"
import axios from "axios"

export default function Login(){
    const [credentials, setCredentials ] = useState({
        email:undefined, 
        password: undefined 
    })

    const handleChange = ((e) => {
        setCredentials(prev => ({...prev, [e.target.id]:e.target.value}))
    })

    const handleLogin= (async (e) => {
        e.preventDefault()
        dispatch({type:'LOGIN_START'})
        try{
            const res = await axios.post('/auth/login', credentials)

        }catch(err){
            dispatch({type:'LOGIN_FAILURE', payload:err.response.data})
        }
    })
    const {loading,error,dispatch} = useContext(AuthContext)
    return(
        <div className="login">
            <div className="lContainer">
                <input type='text' placeholder='email' id="email" onChnage={handleChange} className="lInput"/>
                <input type='text' placeholder='password' id="password" onChnage={handleChange} className="lInput"/>
                <button onClick={handleLogin} className='lButton'>Login</button>
                {error && <span>{error.message}</span>}
            </div>
        </div>
    )
}