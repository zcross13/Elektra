import './tesla.css'
import NavBar from '../../components/navbar/NavBar'
import Header from '../../components/header/Header'
import { useLocation } from 'react-router-dom'
import { useFetch } from '../../useFetch.js'
import { useState, useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'


export default function Tesla() {
    const location = useLocation() //returns the current location object.
    console.log(location)
    const id = location.pathname.split('/')[2]


    const { apiData, loading, error, reFetchData } = useFetch(`/teslas/${id}`)
    console.log(apiData)

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

    // const photos = [
    //     {
    //         src: 'https://tesla-cdn.thron.com/delivery/public/image/tesla/03c34975-991c-45ee-a340-2b700bf7de01/bvlatuR/std/960x540/meet-your-tesla_model-s'
    //     },
    //     {
    //         src: 'https://static-assets.tesla.com/configurator/compositor?&bkba_opt=2&view=STUD_SEAT&size=1400&model=m3&options=$APBS,$DV4W,$IPB1,$PPSW,$PRM31,$SC04,$MDL3,$W40B,$MT324,$CPF0,$RSF1,$CW03&crop=1400,850,300,130&'
    //     },
    //     {
    //         src: "https://static-assets.tesla.com/configurator/compositor?&bkba_opt=2&view=SIDE&size=1400&model=m3&options=$APBS,$DV4W,$IPB1,$PPSW,$PRM31,$SC04,$MDL3,$W40B,$MT324,$CPF0,$RSF1,$CW03&crop=1400,850,300,130&"
    //     }
    // ]
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
                                <button className='bookBtn'>Reserve or Book Now!</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </>
    )
}