import './searchItem.css'

export default function SearchItem(){
    return(
        <div className='searchItem'>
            <img src='https://tesla-cdn.thron.com/delivery/public/image/tesla/9584e5ae-f8df-4e18-8aa3-c84ce07e1fb2/bvlatuR/std/2880x1800/Model-S-Main-Hero-Desktop-LHD?quality=auto-medium&amp;format=auto'
                alt='models'
                className='siImg'
                />
                <div className='siDesc'>
                    <h1 className='siTitle'>Model S</h1>
                    <span className="siPassCount">Passengers</span>
                    <span className='siFeature'>Automatic Transmission</span>
                    <span className='siCancelOp'>Free Cancellation</span>
                    <span className='siVehicleDetails'>View Vehicle Information</span>
                </div>
                <div className='siDetails'>
                    <div className='siRating'>
                        <span>Excellent</span>
                        <button>8.9</button>
                    </div>
                    <div className='siDetailsText'>
                        <span className='siPrice'>$123</span>
                        <span className='siTaxOp'>Includes taxes and fees</span>
                        <button className='siCheckBtn'>See Availbilty</button>
                    </div>
                </div>
        </div>
    )
}