import {
    Routes, 
    Route
} from 'react-router-dom'
import Home from './pages/home/Home'
import List from './pages/list/List'
import Tesla from './pages/tesla/Tesla'

export default function App(){
    return (
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/teslas' element={<List/>}/>
                <Route path='/teslas/:id' element={<Tesla/>}/>
            </Routes>
    )
}


