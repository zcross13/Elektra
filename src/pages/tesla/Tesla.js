import './tesla.css'
import NavBar from '../../components/navbar/NavBar'
import Header from '../../components/header/Header'

export default function Tesla() {

    const photos = [
        {
            src: 'https://tesla-cdn.thron.com/delivery/public/image/tesla/03c34975-991c-45ee-a340-2b700bf7de01/bvlatuR/std/960x540/meet-your-tesla_model-s'
        },
        {
            src: 'https://static-assets.tesla.com/configurator/compositor?&bkba_opt=2&view=STUD_SEAT&size=1400&model=m3&options=$APBS,$DV4W,$IPB1,$PPSW,$PRM31,$SC04,$MDL3,$W40B,$MT324,$CPF0,$RSF1,$CW03&crop=1400,850,300,130&'
        }, 
        {
            src:"https://static-assets.tesla.com/configurator/compositor?&bkba_opt=2&view=SIDE&size=1400&model=m3&options=$APBS,$DV4W,$IPB1,$PPSW,$PRM31,$SC04,$MDL3,$W40B,$MT324,$CPF0,$RSF1,$CW03&crop=1400,850,300,130&"
        }
    ]
    return (
        <>
            <NavBar />
            <Header type='list' />
            <div className='teslaContainer'>
                <div className='teslaWrapper'>
                    <button className='bookNowBtn'>Reserve or Book Now</button>
                    <h1 className='teslaTitle'>Model S</h1>
                    <span className='teslaHighlights'>
                        Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging.
                    </span>
                    <span className='teslaDeal'> Book a Tesla over a week and get a extra day free</span>
                    <div className='teslaImages'>
                        {
                            photos.map(photo => (
                                <div className='teslaImgWrapper'>
                                    <img src={photo.src} alt='photos' className='teslaImg' />
                                </div>
                            ))
                        }
                        <div className='teslaDetails'>
                            <div className='teslaDetailsTexts'>
                                <h1 className='teslaTitle'>Features Includes</h1>
                                <p className='teslaDesc'>
                                    Enhanced AutoPilot, Navigation on 
                                    AutoPilot, Auto Lane Change, Autopark, Summon, Smart Summon <br/>
                                    <span>Self-Driving Capability</span> All functionality of Basic Autopiolt and Enhanced AutoPilot; Traffic Light and Stop Sign Control. 
                                    </p>
                            </div>
                        </div>
                        <div className='teslaDetailsPrice'>
                            <h1>Travel in style</h1>
                            <span>This car has a excellet rating of 8.9</span>
                            <h2>
                                <b>$945</b> (9 days)
                            </h2>
                            <button className='bookBtn'>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}