import { useNavigate } from "react-router-dom"

export default function Signup({ user, handleRegister, setCredentials }) {

    const handleChange = (e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    })

    const navigate = useNavigate()

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    handleRegister()
                    navigate('/')
                }}>
                <div className="login">
                    <div className="lContainer">
                        <input type='text' placeholder='username' id="name" onChange={handleChange} className="lInput" />
                        <input type='text' placeholder='email' id="email" onChange={handleChange} className="lInput" />
                        <input type='password' placeholder='password' id="password" onChange={handleChange} className="lInput" />
                        <input type='checkbox' placeholder='Admin' id="Admin" onChange={handleChange} className="lInput" />
                        <button className='lButton'>Register</button>
                    </div>
                </div>
            </form>
        </>
    )
}
