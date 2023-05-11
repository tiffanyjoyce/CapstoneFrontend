import React, {useState, useMemo} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import './styles/global.css'
import Home from './views/Home';
import Restaurants from './views/Restaurants';
import Random from './views/Random';
import Hotels from './views/Hotels';
import Attractions from './views/Attractions';
import Rentals from './views/Rentals';
import Footer from './components/Footer';
import ViewHotels from './views/ViewHotels';
import Login from './views/Login';
import SignUp from './views/SignUp';
import Calendar from './views/Calendar';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <>
    <UserProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/hotels' exact element={<Hotels/>}/>
          <Route path='/calendar' exact element = {<Calendar/>}/>
          <Route path='/restaurants' exact element={<Restaurants/>}/>
          <Route path='/random' exact element={<Random/>}/>
          <Route path='/rentals' exact element={<Rentals/>}/>
          <Route path='/attractions' exact element={<Attractions/>}/>
          <Route path='/hotels/:hotelId/:indate/:outdate' exact element={<ViewHotels/>}/>
          <Route path='/signup' exact element = {<SignUp/>}/>
          <Route path='/login' exact element = {<Login/>}/>
        </Routes>
        <Footer/>
      </Router>
      </UserProvider>
    </>
  );
}

export default App;
