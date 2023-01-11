# ** Elektra Booking **



### A MERN stack base application. Elektra is a booking application when you can book Teslas. 


The project demostration a knowledge in the following... 

1. CRUD 
2. Node.js
3. Express
4. Mongoose 
5. Javascript
6. HTML
7. CSS
8. React
9. Axios 

## Requirements/Getting Started 
For development, you will need Node.js installed in your environemnt along with the following... 

**Package.json**
```js
{
  "name": "elektra",
  "version": "0.1.0",
  "private": true,
  "engines": {
    "node": "18.7"
  },
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^6.2.1",
    "@fortawesome/free-regular-svg-icons": "^6.2.1",
    "@fortawesome/free-solid-svg-icons": "^6.2.1",
    "@fortawesome/react-fontawesome": "^0.2.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.2.2",
    "bcrypt": "^5.1.0",
    "cookie-parser": "^1.4.6",
    "date-fns": "^2.29.3",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.0",
    "mongoose": "^6.8.2",
    "morgan": "^1.10.0",
    "react": "^18.2.0",
    "react-date-range": "^1.4.0",
    "react-datepicker": "^4.8.0",
    "react-datetime": "^3.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.6.1",
    "react-scripts": "5.0.1",
    "react-time-picker": "^5.1.0",
    "react-time-range": "^1.0.4",
    "serve-favicon": "^2.5.0",
    "web-vitals": "^2.1.4"
  },
  

```

### Node Resources
- [official Node.js website](https://nodejs.org/) and download the installer.
- [npmjs](https://www.npmjs.com/) *Remember look up all npm install*

## Project Planning Phase 

Trello Board:
[Trello Board](https://trello.com/b/HS82EOxD/project-3)



## *Entity–relationship model*
![ERD!](https://lucid.app/lucidchart/a78fc6a3-1f00-4443-a260-e2f431cec752/edit?invitationId=inv_2b6cedd8-2500-4fbb-9910-efa0bd59df4f)


## Main Mongoose Model **Tesla Model**

```js 
const teslaSchema = new mongoose.Schema({
    model: { 
        type: String, 
        require: true 
    }, 
    pricePerDay: { 
        type: Number, 
        require: true 
    }, 
    images: { 
        type:[ String], 
        require: true 
    }, 
    teslaDescription: {
        type: String, 
        required: true
    },
    teslaDetails: {
        type: String, 
        required: true
    },
    rating:{
        type:Number, 
        min:0, 
        max:5,
    }, 
    reservations:[{unavailableDates: {type: [Date]}}]
})
```

## Fav part 

```js 
const jwt = require('jsonwebtoken')
const createError = require('./error')

const verifyToken = (req,res,next) => {
    const token = req.cookies.access_token; 
    if(!token){
        return next(createError(401, "Your are not autheticated!"))
    }

    jwt.verify(token,process.env.SECRET, (err, user) =>{
        if(err) return next(createError(403, "Token is not valid"))
        req.user = user
        next()
    })
    
}

const verifyUser = (req,res,next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            return next(createError(403, "You are not authorized!"))
        }
    })
}

const verifyAdmin = (req,res,next) => {
    verifyToken(req, res, () => {
        if(req.user.isAdmin){
            next()
        }else{
            return next(createError(403, "You are not authorized!"))
        }
    })
}



module.exports = {verifyToken, verifyUser, verifyAdmin}

```

## BIGGEST CHALLENGE 

My biggest challenege was connecting the frontend to the backend

## KEY LEARNING AND KEY TAKEAWAY 

My biggest takeaway was gaining a deeper understanding of signup/login auth.	:face_exhaling:  

## Things I want to add 
- :pushpin: Finishing connecting the frontend and backend  
- :pushpin: Complete booking site with airflights, and hotels. 


## Contributions:


- General Assembly's Instructional Team :clap:  
- Youtube Lama Dev 

## Q&A??  