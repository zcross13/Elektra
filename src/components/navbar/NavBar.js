import './navbar.css'

const Navbar = () => {
    return(
        <div className='navbar'>
            <div className='navContainer'>
                <span className='logo'>ElektraBooking</span>
                <div classNamme='navItems'>
                    <button className='navButton'> Register </button>
                    <button className='navButton'> Login </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar