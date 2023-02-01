import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from "../../context/AuthContext"


const Navbar = () => {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleRegister = () => {
        navigate('/Register')
    }

    const handleLogin = () => {
        navigate('/Login')
    }


    return (
        <div className='navbar'>
            <div className='navContainer'>
                <Link to='/' style={{ color: "inherit", textDecoration: "none" }}>
                    <span className='logo' >ElektraBooking</span>
                </Link>
                {user ? user.name : (
                    <div classNamme='navItems'>
                        <button className='navButton' onClick={handleRegister}> Register </button>
                        <button className='navButton' onClick={handleLogin}> Login </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar