import './home.css'
import Navbar from '../../components/navbar/NavBar'
import Header from '../../components/header/Header'

export default function Home(){
    return (
        <div className='home'>
            <Navbar/>
            <Header/>
        </div>
    )
}