import './tesla.css'
import NavBar from '../../components/navbar/NavBar'
import Header from '../../components/header/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import { useFetch } from '../../useFetch.js'
import { useState, useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'
import {AuthContext} from "../../context/AuthContext"
import Reserve from '../../components/reserve/Reserve'


export default function Tesla() {
    const location = useLocation() //returns the current location object.
    console.log(location)
    const id = location.pathname.split('/')[2]


    const { apiData, loading, error, reFetchData } = useFetch(`/teslas/${id}`)
    const {user} =useContext(AuthContext)
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const { dates } = useContext(SearchContext)

console.log(dates)

const MILLSECONDS_PER_DAY = 1000 * 60 * 60 * 24 
function dayDifference(date1, date2){
    // The Math. abs() function returns the absolute value of a number.
    const timeDiff = Math.abs(date2.getTime() - date1.getTime())
    //ceil is short for ceiling(up), floor is down...
    const diffDays = Math.ceil(timeDiff/ MILLSECONDS_PER_DAY)
    return diffDays
}

const days = dayDifference(dates[0].endDate, dates[0].startDate) 

    const handleClick = () => {
        
    }
    return (
        <>
            <NavBar />
            <Header type='list' />
            {loading ? ("loading") :
                (<div className='teslaContainer'>
                    <div className='teslaWrapper'>
                        <button className='bookNowBtn'>Reserve or Book Now</button>
                        <h1 className='teslaTitle'>{apiData.model}</h1>
                        <span className='teslaDeal'> Book a Tesla over a week and get a extra day free</span>
                        <div className='teslaImages'>
                            <div className='teslaImgWrapper'>
                            {apiData.images?.map((image,i) =>  //? mean if there is a array 
                                    (
                                    <img src={image} 
                                    alt='photos' 
                                    className='teslaImg' />))}
                            </div>
                            <div className='teslaDetails'>
                                <div className='teslaDetailsTexts'>
                                    <h1 className='teslaTitle'>Features Includes</h1>
                                    <ul className='teslaDesc'>
                                        {apiData.features?.map((feature, i) =>(
                                            <div>
                                                <li>{feature}</li>
                                            </div>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className='teslaDetailsPrice'>
                                <h1>Travel in style</h1>
                                <span>This car has a excellet rating of 8.9</span>
                                <h2>
                                    <b>${apiData.pricePerDay * days}</b> for ({days} days)
                                </h2>
                                <button className='bookBtn' onClick={handleClick}>Reserve or Book Now!</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
            {openModal && <Reserve setOpen={setOpenModal} hotelId={id}/>}
        </>
    )
}