import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faCar, faClock } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { DateRange } from 'react-date-range'
import { useContext, useState } from 'react'
import 'react-date-range/dist/styles.css' //main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'




export default function Header({ type }) {
    const [destination, setDestination] = useState('')
    const [openDate, setOpenDate] = useState(false)
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])

    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const navigate = useNavigate()

    const { dispatch } = useContext(SearchContext)
    
    const handleSearch = () => {
        dispatch({type:"NEW_SEARCH", payload:{destination, dates}})
        navigate('/teslas', {state:{destination, dates}})
    }


    return (
        <div className='header'>
            <div className={type === 'list' ? 'headerContainer listMode' : 'headerContainer'}>
                <div className='headerList'>
                    <div className='headerListItem active'>
                        <FontAwesomeIcon icon={faUser} />
                        <span>Profile</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faCar} />
                        <span>Teslas Rental</span>
                    </div>
                </div>
                {type !== "list" &&
                    <>
                        <h1 className='headerTitle'>Make you trip electric</h1>
                        <p className='headerDesc'>
                            Get rewarded for your travels - unlock instant savings of 10% or more with a free Elektra account
                        </p>
                        <button className='headerBtn'> Sign in/ Register</button>
                        <div className='headerSearch'>
                            <div className='headerSearchItem'>
                                <FontAwesomeIcon icon={faCar} className='headerIcon' />
                                <input
                                    type='text'
                                    placeholder='Where are you going'
                                    className='headerSearchInput'
                                    onChange={e => setDestination(e.target.value)} />
                            </div>
                            <div className='headerSearchItem'>
                                <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                                <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>
                                    {`${format(dates[0].startDate, 'MM/dd/yyyy')} to 
                                ${format(dates[0].endDate, 'MM/dd/yyyy')}`}</span>
                            </div>
                            {openDate &&
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDates([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={dates}
                                    className='date'
                                    minDate={new Date()}
                                />}
                            <div className='headerSearchItem'>
                                <FontAwesomeIcon icon={faClock} className='headerIcon' />
                                <input
                                    type="time"
                                    placeholder='Pickup Time'
                                    className='headerSearchInput'
                                    onChange={e => setStartTime(e.target.value)} />
                            </div>
                            <div className='headerSearchItem'>
                                <FontAwesomeIcon icon={faClock} className='headerIcon' />
                                <input
                                    type="time"
                                    placeholder='Return Time'
                                    className='headerSearchInput'
                                    onChange={e => setEndTime(e.target.value)} />
                            </div>
                            <button className='headerBtn' onClick={handleSearch}>Search</button>
                        </div>
                    </>}
            </div>
        </div >
    )
}

