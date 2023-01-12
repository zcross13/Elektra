 import './searchItem.css'
 import {Link} from 'react-router-dom'


export default function SearchItem({item}){

    return(
        <div className='searchItem'>
            <img src={item.images}
                alt='models'
                className='siImg'
                />
                <div className='siDesc'>
                    <h1 className='siTitle'>Model S</h1>
                    <span className="siPassCount">Seat up to 3 Adult</span>
                    <span className='siFeature'>Automatic Transmission</span>
                    <span className='siCancelOp'>Free Cancellation</span>
                    <span className='siVehicleDetails'>View Vehicle Information</span>
                </div>
                <div className='siDetails'>
                    <div className='siRating'>
                        <span></span>
                        <button>8.9</button>
                    </div>
                    <div className='siDetailsText'>
                        <span className='siPrice'>$89.99</span>
                        <span className='siTaxOp'>Includes taxes and fees</span>
                        <Link to={`/teslas/${item._id}`}>
                        <button className='siCheckBtn'>See Availbilty</button>
                        </Link>
                    </div>
                </div>
        </div>
    )
}