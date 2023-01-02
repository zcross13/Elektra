import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import AuthPage from '../AuthPage/AuthPage'
import NewReservationPage from '../NewReservationPage/NewReservationPage'
import ReservationHistoryPage from '../ReservationHistoryPage/ReservationHistoryPage'

export default function App(){
    const [ user, setUser ] = useState({})

    return(
        <main className='App'>
            {
                user? 
                <Routes>
                    <Route path="/reservations/new" element={<NewReservationPage/>}/>
                    <Route path="/reservations" element={<ReservationHistoryPage/>}/>
                </Routes>
                :
                <AuthPage/>
            }
        </main>
    )
}