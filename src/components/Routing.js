import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Booking from "./pages/Booking";
import BookingConfirmation from "./pages/BookingConfirmation";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Order from "./pages/Order";
 

function Routing {
    return (
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="./bookingconfirmation" element={<BookingConfirmation />} />
            <Route path="./homepage" element={<HomePage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Order" element={<Order />} />
        </Routes>
    )
}

export default Routing;