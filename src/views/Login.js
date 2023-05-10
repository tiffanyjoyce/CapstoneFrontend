import React, {useState, useEffect} from 'react'
import "./Login.css"
import httpClient from '../httpClient';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword]= useState('');

  const loginUser= async ()=> {
    console.log(username,password)

  try{
    const resp = await httpClient.post('//127.0.0.1:5000/login', {
      username,
      password,
    })
    window.location.href='/';
  }
  catch (error){
    if(error.response.status===401){
      alert("Invalid credentials");
    }
  }
  }

  return (
    <div>
     <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login</h1>
      <p className="py-6">Hello there! Ready to pick up where you left off?</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
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
            <p>Don't have an account? <a href="/signup" className="label-text link link-hover hover:text-primary">Sign up</a></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login
