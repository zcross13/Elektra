 import './searchItem.css'


export default function SearchItem({item}){

    return(
        <div className='searchItem'>
            <img src="https://static-assets.tesla.com/configurator/compositor?&bkba_opt=2&view=STUD_3QTR&size=1400&model=my&options=$APF2,$APBS,$DV4W,$INYPB,$PPSW,$PRMY1,$SC04,$MDLY,$WY19B,$MTY03,$STY5S,$CPF0,$FM3U&crop=1400,850,300,130&"
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
                        <button className='siCheckBtn'>See Availbilty</button>
                    </div>
                </div>
        </div>
    )
}