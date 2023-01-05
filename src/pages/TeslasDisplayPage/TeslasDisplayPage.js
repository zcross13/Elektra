import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function TeslasDisplayPage() {
    const [teslas, setTeslas] = useState([])
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    const navigateToReservation = () => {
        navigate('/reservations/new')
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
                                <button onClick={navigateToReservation}>Reserve Me</button>
                                </>
                        )
                            })
                    }
                </ul>
                {error &&
                    <h3>{error}</h3>
                }
            </div>
        </>
    )
}


    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch('api/teslas')
    //         const data = await response.json()
    //         setTeslas(data)
    //     }

    //     fetchData()
    // }, [])