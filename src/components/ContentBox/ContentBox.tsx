import { Route, Routes } from "react-router-dom"
import { HomeView } from "../../views/homeView"
import { MapView } from "../../views/mapView"
import { ListView } from "../../views/listView"
import { OrdersView } from "../../views/ordersView"
import { SingleRestaurantView } from "../../views/signleRestaurantView"
import { OrderComplete } from "../OrderComplete/OrderComplete"
import { AddRestaurantView } from "../../views/addRestaurantView"
import { AddProduct } from "../AddProduct/AddProduct"

export const ContentBox = () => {
    return (
        <Routes>
            <Route path="/home" element={<HomeView />} />
            <Route path="/map" element={<MapView />} />
            <Route path="/list" element={<ListView />} />
            <Route path="/orders" element={<OrdersView />} />
            <Route path="/restaurant/addNew" element={<AddRestaurantView />}/>
            <Route path="/restaurant/:id/addProduct" element={<AddProduct/>}/>
            <Route path="/restaurant/:id" element={<SingleRestaurantView />}/>
            <Route path="/order/complete/:orderId" element={<OrderComplete />}/>
            <Route path="*" element={<HomeView />} />
        </Routes>
    )
}