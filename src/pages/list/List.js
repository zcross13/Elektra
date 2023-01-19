import './List.css'
import NavBar from '../../components/navbar/NavBar'
import Header from '../../components/header/Header'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'
import {useFetch} from '../../useFetch.js'

export default function List() {

    const location = useLocation()
    const [destination, setDestination] = useState(location.state.destination)
    const [dates, setDate] = useState(location.state.dates)
    const [openDate, setOpenDate] = useState(false)
    const [min, setMin] = useState(undefined)
    const [max, setMax] = useState(undefined)

    const {apiData, loading, error, reFetchData} = useFetch(`/teslas`)

    const handleClick = (e) => {
        e.preventDefault()
        reFetchData(`teslas/minmax?min=${min || 0}&max=${max||100}`)
    }

    return (
        <div>
            <NavBar />
            <Header type='list' />
            <div className='listContainer'>
                <div className='listWrapper'>
                    <div className='listSearch'>
                        <h1 className='lsTitle'>Search</h1>
                        <div className='listItem'>
                            <label>destination</label>
                            <input type='text' placeholder={destination} />
                        </div>
                        <div className='listItem'>
                            <label>Dates</label>
                            <span onClick={() => setOpenDate(!openDate)}> {`${format(dates[0].startDate, 'MM/dd/yyyy')} to 
                            ${format(dates[0].endDate, 'MM/dd/yyyy')}`}
                            </span>
                            {openDate && (
                                <DateRange
                                    onChange={item => setDate([item.selection])}
                                    ranges={dates}
                                    minDate={new Date()} />
                            )}
                        </div>
                        <div className='listItem'>
                            <label>Options</label>
                            <div className='lsOption'>
                                <div className='lsOptionItem'>
                                    <span className='lsOptionText' onChange={(e) => setMin(e.target.value)}>
                                        Min Price <small>Per Day</small>
                                    </span>
                                    <input type='number' className='lsOptionInput' />
                                </div>
                                <div className='lsOptionItem'>
                                    <span className='lsOptionText' onChange={(e) => setMax(e.target.value)}>
                                        Max Price <small>Per Day</small>
                                    </span>
                                    <input type='number' className='lsOptionInput' />
                                </div>
                                <div className='lsOptionItem'>
                                    <span className='lsOptionText'>
                                        Passengers
                                    </span>
                                    <input type='number' min={1} className='lsOptionInput' />
                                </div>
                            </div>
                        </div>
                        <button onClick={handleClick}>Search</button>
                    </div>
                    <div className='listResults'></div>
                    {loading ? "loading": <>
                    {apiData.map(item => (
                        <SearchItem item={item} key={item._id}/>
                    ))}
                    </>}
                </div>
            </div>
        </div>
    )
}