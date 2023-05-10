import React, {useState, UseState} from 'react'
import "./SignUp.css"
import httpClient from '../httpClient';
import { json, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword]= useState('');
  const [email, setEmail] = useState('');
    const navigate = useNavigate()
  const registerUser= async ()=> {
    const res = await fetch('127.0.0.1:5000/signup',{
        method:"POST",
        body:JSON.stringify({
            username:username,
            email:email,
            password:password,
        }),
        headers:{
            "Content-Type":"application/json",
            'Access-Control-Allow-Origin':'*',
        }

    })
    const data = await res.json()
    console.log(data)
    if(data){
        navigate('/')
    }
  }

  return (
    <div className='container bg-img'>
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up</h1>
      <p className="py-6">Signing up takes only a few seconds - get started now!</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="Enter Email" className="input input-bordered" name='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input type="text" placeholder="Enter Username" className="input input-bordered" name='email' value={username} onChange={(e)=> setUsername(e.target.value)}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="Enter Password" className="input input-bordered" name='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
          <label className="label">
            <p>Already have an account? <a href="/login" className="label-text link link-hover hover:text-primary">Login</a></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" >Sign Up</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default SignUp
