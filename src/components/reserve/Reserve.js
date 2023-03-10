import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './reserve.css'

export default function Reserve({ setOpen, teslaId }) {
    return (
        <div className='reserve'>
            <div className='rContainer'>
                <FontAwesomeIcon
                    icon={faCircleXmark}
                    className='rClose'
                    onClick={() => setOpen(false)} />
            </div>
        </div>
    )
}