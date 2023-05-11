import './Navbar.css';
import React, {useState, useContext} from 'react';
import sun from '../images/sunshining.jpeg'
import UserContext from '../context/UserContext';
import { NavLink } from 'react-router-dom';

function Navbar(){
  const {user, setUser} = useContext(UserContext)
return(

    <nav>
       <div className="navbar bg-base-100 shadow-md">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl" href='/'>Tranquil Travel</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <NavLink to={user.id ? '/calendar' : '/login'}><i class="calendar fa-solid fa-calendar-days fa-2xl"></i></NavLink>
        </div>
      </label>
      {/* <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">0 Upcoming plans</span>
          <span className="text-info">Subtotal: $0</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">Make plans</button>
          </div>
        </div>
      </div> */}
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={sun} alt=''/>
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between" href='/'>
            Profile
          </a>
        </li>
        <li><a href='/'>Settings</a></li>
        <li><a href='/' onClick={setUser({})}>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    </nav>
)
}

export default Navbar