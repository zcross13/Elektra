import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



export default function Homepage() {
    const [teslas, setTeslas] = useState([])
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    // const navigateToReservation = () => {
    //     navigate('/reservations/new')
    // }
    
    // Show tesla page 
    const navigateToTesla = (id) => {
        navigate(`/api/teslas/${id}`)
    }

    useEffect(() => {
        const getTesla = async () => {
            try {
                const response = await fetch('/api/teslas')
                const data = await response.json()
                setTeslas(data)
            } catch (error) {
                console.error(error)
            }
        }

        getTesla()
    }, [])

    console.log(teslas)

    return (
        <>
            <h1>Tesla Display Page</h1>
            <div className='teslaList'>
                <ul>
                    {
                        teslas.length === 0 &&
                        <li>Sorry No data available</li>
                    }
                    {
                        teslas &&
                        teslas.map((tesla, i) => {
                            return(
                                <>
                                <li>{tesla.images}</li>
                                <li>{tesla.model} {tesla.year}</li>
                                <button onClick={() => navigateToTesla(tesla._id)}>Reserve Me</button>
                                </>
                        )
                            })
                    }
                </ul>
            </div>
        </>
    )
}
