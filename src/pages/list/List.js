import './List.css'
import NavBar from '../../components/navbar/NavBar'
import Header from '../../components/header/Header'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'

export default function List() {

    const location = useLocation()
    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [openDate, setOpenDate] = useState(false)

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
                            <label>Date</label>
                            <span onClick={() => setOpenDate(!openDate)}> {`${format(date[0].startDate, 'MM/dd/yyyy')} to 
                            ${format(date[0].endDate, 'MM/dd/yyyy')}`}
                            </span>
                            {openDate && (
                                <DateRange
                                    onChange={item => setDate([item.selection])}
                                    ranges={date}
                                    minDate={new Date()} />
                            )}
                        </div>
                        <div className='listItem'>
                            <label>Options</label>
                            <div className='lsOption'>
                                <div className='lsOptionItem'>
                                    <span className='lsOptionText'>
                                        Min Price <small>Per Day</small>
                                    </span>
                                    <input type='number' className='lsOptionInput' />
                                </div>
                                <div className='lsOptionItem'>
                                    <span className='lsOptionText'>
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
                        <button>Search</button>
                    </div>
                    <div className='listResults'></div>
                </div>
            </div>
        </div>
    )
}