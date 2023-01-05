import { useState , useEffect } from 'react'
import data from "../../data"

export default function TeslasDisplayPage() {
    const [teslas, setTeslas] = useState([])
    const [error, setError] = useState(null)
    
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
                                <button>Reserve Me</button>
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