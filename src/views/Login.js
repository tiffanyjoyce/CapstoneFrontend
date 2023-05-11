import React, {useState, useContext} from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

const Login = () => {
  const [formvalue, setValue] = useState({username:'', password:''});

  const {user, setUser} = useContext(UserContext)

  const handleChange = (event) =>{
    const {name, value} = event.target;
    setValue({...formvalue, [name]: value});
    console.log(formvalue)
  }
  const handleSubmit = (event) =>{
    event.preventDefault()
    loginUser()
    setValue({username: '', password:""})
    console.log(formvalue)
  }
  const navigate = useNavigate()
  async function loginUser(){
    fetch('http://127.0.0.1:5000/login',{
        method:"POST",
        body:JSON.stringify({
            username:formvalue.username,
            password:formvalue.password,
        }),
        headers:{
            "Content-Type":"application/json",
            'Access-Control-Allow-Origin':'*',
        }

    }).then(res => {
        return res.json()
    }).then(data => {console.log(data);
      setUser(data)
      navigate('/')
    })
    .catch(error => console.log("ERROR"))
    }

  return (
    <div>
     <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login</h1>
      <p className="py-6">Hello there! Ready to pick up where you left off?</p>
    </div>
    <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" onSubmit={handleSubmit}>
      <div className="card-body">
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
            <p>Don't have an account? <a href="/signup" className="label-text link link-hover hover:text-primary">Sign up</a></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </form>
  </div>
</div>
    </div>
  )
}

export default Login
