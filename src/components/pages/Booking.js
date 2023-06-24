import React from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../../components/BookingForm";
import "./Booking.css";
import littlelemon from "./littlelemon.jpg"

function Booking() {
    const navigate = useNavigate();

    return (
        <main className="booking">
            <h1>Booking</h1>
            <section>
                <img
                    src={littlelemon}
                    alt="Out outdoor ambience"
                    style={{ borderRadius: "4px", width: "50%" }} />
            </section>
            <section>
                <BookingForm navigate={navigate} />
            </section>
        </main>
    );
}

export default Booking;