import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/HomepageComponents/Homepage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "./Components/Contact/ContactForm";
import Menupages from "./Components/Menupage/Menupages";
import RestaurantsList from "./Components/Menupage/fetchdata/RestaurantsList";
import RestaurantDetails from "./Components/Menupage/fetchdata/RestaurantDetails";
import Cart from "./Components/Cart/Cart";
import Signup from "./Components/logandSignup/Signup";
import Login from "./Components/logandSignup/Login";
import CheckoutForm from "./Components/Payment/CheckoutForm";
import PaymentSuccess from "./Components/Payment/PaymentSuccess";
import AboutUs from "./Components/Aboutus/Aboutus";

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Menu" element={<Menupages />} />
        <Route path="/Contact" element={<ContactForm />} />
        <Route path="/restaurants" element={<RestaurantsList />} />
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/payment" element={<CheckoutForm/>} />
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
