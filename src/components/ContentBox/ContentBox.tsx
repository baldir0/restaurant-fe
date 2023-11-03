import { Route, Routes } from "react-router-dom"
import { HomeView } from "../../views/homeView"

export const ContentBox = () => {
    return (
        <div className="content">
            <Routes>
                <Route path="/home" element={<HomeView/>}/>
                <Route path="/map" />
                <Route path="/list" />
                <Route path="/orders" />
                <Route path="*" />
            </Routes>
        </div>
    )
}