import React from 'react';
import './App.css';
import Nav from './components/Nav';
// import Header from './components/Header';
// import BookingForm from './components/BookingForm';
// import Booking from './components/Booking';
import Main from './components/Main';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Main/>
      <Menu/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
