import React, {useState, UseState} from 'react'
import "./SignUp.css"
import httpClient from '../httpClient';
import { json, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formvalue, setValue] = useState({username:'', email: '', password: ''})

  const handleChange = (event)=>{
    const {name, value} = event.target;
    setValue({...formvalue, [name]: value});
    console.log(formvalue)
  }
  const handleSubmit= (event)=>{
    event.preventDefault()
    registerUser()
    setValue({username:'', email:'', password: ''})
    console.log(formvalue)
  }

    const navigate = useNavigate()
  async function registerUser() {
    fetch('http://127.0.0.1:5000/signup',{
        method:"POST",
        body:JSON.stringify({
            username:formvalue.username,
            email:formvalue.email,
            password:formvalue.password,
        }),
        headers:{
            "Content-Type":"application/json",
            'Access-Control-Allow-Origin':'*',
        }

    }).then(res => {
        return res.json()
    }).then(data => navigate('/')
    )
    .catch(error => console.log("ERROR"))
    }

  return (
    <div className='container bg-img'>
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up</h1>
      <p className="py-6">Signing up takes only a few seconds - get started now!</p>
    </div>
    <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" onSubmit={handleSubmit}>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="Enter Email" className="input input-bordered" name='email' value={formvalue.email} onChange={handleChange}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input type="text" placeholder="Enter Username" className="input input-bordered" name='username' value={formvalue.username} onChange={handleChange}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="Enter Password" className="input input-bordered" name='password' value={formvalue.password} onChange={handleChange}/>
          <label className="label">
            <p>Already have an account? <a href="/login" className="label-text link link-hover hover:text-primary">Login</a></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" >Sign Up</button>
        </div>
      </div>
    </form>
  </div>
</div>
    </div>
  )
}

export default SignUp
