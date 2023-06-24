import './App.css';
import React from 'react';
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import { Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import Booking from "./components/pages/Booking";
import BookingConfirmation from './components/pages/BookingConfirmation';
import BookingForm from './components/BookingForm';
import { useFormContext } from './store/FormContext';

function App() {
  const { form } = useFormContext();

  const formProps = {
    name: form.name,
    date: form.date,
    time: form.time,
    guests: form.numberOfGuests,
    occasion: form.occasion,
    table: form.tablePreference,
    request: form.message,
  };
  return (
   <>
   
   <Nav />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/bookingfrom' element={<BookingForm />} />
    <Route path='/booking' element={<Booking />} />
    <Route path="/bookingconfirmation" element={<BookingConfirmation {...formProps} />} />
   </Routes>
   <Footer />
   
   </>
  )
}

export default App;
