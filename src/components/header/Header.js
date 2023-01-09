import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faCar, faClock } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { DateRange } from 'react-date-range'
import { useState } from 'react'
import 'react-date-range/dist/styles.css' //main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { format } from 'date-fns'




const Header = ({ type }) => {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])



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
                { type !== "list" &&
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
                                    className='headerSearchInput' />
                            </div>
                            <div className='headerSearchItem'>
                                <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                                <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>
                                    {`${format(date[0].startDate, 'MM/dd/yyyy')} to 
                        ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
                            </div>
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className='date' />}
                            <div className='headerSearchItem'>
                                <FontAwesomeIcon icon={faClock} className='headerIcon' />
                                <span className='headerSearchText'>time</span>
                                <div className='headerSearchItem'>
                                    <button className='headerBtn'>Search</button>
                                </div>
                            </div>
                        </div>
                    </>}
            </div>
        </div>
    )
}

export default Header