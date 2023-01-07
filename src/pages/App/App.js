import { Route, Routes } from "react-router-dom";
import Homepage from "../Homepage/Homepage"
import TeslaDisplayPage from "../TeslaDisplayPage/TeslaDisplayPage"

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/teslas" element={<Homepage />} />
                <Route path="/teslas/:id" element={<TeslaDisplayPage />} />
            </Routes>
        </div>
    )
}


