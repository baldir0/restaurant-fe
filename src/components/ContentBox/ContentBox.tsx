import { Route, Routes } from "react-router-dom"

export const ContentBox = () => {
    return (
        <div className="content">
            <Routes>
                <Route path="/home" />
                <Route path="/map" />
                <Route path="/list" />
                <Route path="/orders" />
                <Route path="*" />
            </Routes>
        </div>
    )
}