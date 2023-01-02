import { useState } from 'react'
import AuthPage from './pages/AuthPage/AuthPage'
import NewReservationPage from './pages/NewReservationPage/NewReservationPage'

export default function App(){
    const [ user, setUser ] = useState(null)

    return(
        <main className='App'>
            {
                user? 
                <NewReservationPage/>
                :
                <AuthPage/>
            }
        </main>
    )
}