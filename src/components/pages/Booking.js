import React from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../../components/BookingForm";
import "./Booking.css";

function Booking() {
    const navigate = useNavigate();

    return (
        <main className="booking">
            <h1>Booking</h1>
            <section>
                <BookingForm navigate={navigate} />
            </section>
        </main>
    );
}

export default Booking;