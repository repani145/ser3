import React from "react";
import {Route,Routes } from "react-router-dom";
import RestaurantsList from "./RestaurantsList";
import RestaurantDetails from "./RestaurantDetails";
import Cart from "../../Cart/Cart";
import CheckoutForm from "../../Payment/CheckoutForm";
import PaymentSuccess from "../../Payment/PaymentSuccess";
function Apps(){
    return(
            <Routes>
            <Route path="/" element={<RestaurantsList/>}/>
            <Route path="/restaurant/:id" element={<RestaurantDetails/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/payment" element={<CheckoutForm/>} />
            <Route path="/success" element={<PaymentSuccess />} />
            <Route path="*" element={<div>404 not defined</div>} />
            </Routes>
    )
}
export default Apps;