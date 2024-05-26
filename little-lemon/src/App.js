import React from 'react';
import './App.css';
import Nav from './components/Nav';
// import Header from './components/Header';
// import BookingForm from './components/BookingForm';
// import Booking from './components/Booking';
import Main from './components/Main';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <Nav/>
      <Main/>
      <Menu/>
      {/* <Header/>
      <BookingForm/>
      <Booking/> */}
    </>
  );
}

export default App;
