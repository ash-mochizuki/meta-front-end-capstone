import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import Booking from './components/Booking';

function App() {
  return (
    <>
      <Nav/>
      <Header/>
      <BookingForm/>
      <Booking/>
    </>
  );
}

export default App;
