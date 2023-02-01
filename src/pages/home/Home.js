import './home.css'
import Navbar from '../../components/navbar/NavBar'
import Header from '../../components/header/Header'




export default function Home({ user }) {

    return (
        <div className='home'>
            <Navbar
                user={user} />
            <Header
                user={user} />
        </div>
    )
}