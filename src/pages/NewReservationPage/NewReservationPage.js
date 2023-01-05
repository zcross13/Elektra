import { useState } from 'react'

export default function NewReservationPage(){

    return(
        <div>
            <h1>Create a Reservation</h1>
            <input type='text' placeholder='First Name'/> <br/>
            <input type='text' placeholder='Last Name'/> <br/>
            <input type='text' placeholder='Email'/> <br/>
            <input type='text' placeholder='Driver License'/> <br/>
            <input type='text' placeholder='Age'/> <br/>
            <input type='text' placeholder='Date of Birth'/> <br/>
            <input type='text' placeholder='Pickup Location'/> <br/>
            <button type='submit'>Next: Select Tesla</button>
        </div>
    )
}