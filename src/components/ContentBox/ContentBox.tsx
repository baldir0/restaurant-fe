import { Route, Routes } from "react-router-dom"
import { HomeView } from "../../views/homeView"
import { MapView } from "../../views/mapView"
import { ListView } from "../../views/listView"
import { OrdersView } from "../../views/ordersView"

export const ContentBox = () => {
    return (
        <Routes>
            <Route path="/home" element={<HomeView />} />
            <Route path="/map" element={<MapView />} />
            <Route path="/list" element={<ListView />} />
            <Route path="/orders" element={<OrdersView />} />
            <Route path="*" element={<HomeView />} />
        </Routes>
    )
}