import React from 'react';
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

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/hotels' exact element={<Hotels/>}/>
          <Route path='/restaurants' exact element={<Restaurants/>}/>
          <Route path='/random' exact element={<Random/>}/>
          <Route path='/rentals' exact element={<Rentals/>}/>
          <Route path='/attractions' exact element={<Attractions/>}/>
          <Route path='/viewhotels/:hotels' exact element={<ViewHotels/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
