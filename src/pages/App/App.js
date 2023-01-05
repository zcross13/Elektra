import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import AuthPage from '../AuthPage/AuthPage'
import NewReservationPage from '../NewReservationPage/NewReservationPage'
import ReservationHistoryPage from '../ReservationHistoryPage/ReservationHistoryPage'
import NavBar from '../../services/NavBar/NavBar'
import TeslasDisplayPage from '../TeslasDisplayPage/TeslasDisplayPage'

export default function App() {

    return (
        <main className='App'>
            <>
                <NavBar />
                <Routes>
                    <Route path='/teslas' element={
                        <TeslasDisplayPage />
                    } />
                    <Route path="/reservations/new" element=
                        {
                            <NewReservationPage />
                        } />
                    <Route path="/reservations" element=
                        {
                            <ReservationHistoryPage />
                        } />
                </Routes>
            </>
        </main>
    )
}

// export default function App() {
//     const [user, setUser] = useState(null)

//     return (
//         <main className='App'>
//             <NavBar />
//             {
//                 user ?
//                         <Routes>
//                             <Route path="/reservations/new" element={<NewReservationPage />} />
//                             <Route path="/reservations" element={<ReservationHistoryPage />} />
//                         </Routes>
//                     :
//                     <AuthPage />
//             }
//         </main>
//     )
// }