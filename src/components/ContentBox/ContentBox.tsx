import { Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home"

export const ContentBox = () => {
    return (
        <div className="content">
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/map" />
                <Route path="/list" />
                <Route path="/orders" />
                <Route path="*" />
            </Routes>
        </div>
    )
}