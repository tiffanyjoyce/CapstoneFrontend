import React, {useState, UseState} from 'react'
import "./SignUp.css"

const SignUp = () => {
    const [formvalue, setValue]= useState({username:"", email:'', password:''})
    const handleChange =(event)=>{
        const{name, value}= event.target;
        setValue({...formvalue, [name]:value});
        console.log(formvalue)
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        register()
        setValue('')
        console.log(formvalue);
    }
    
    async function register(){
        fetch("http://127.0.0.1:5000/signup",{
            method: 'POST',
            headers:{
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                username: formvalue.username,
                email: formvalue.email,
                password: formvalue.password,
            })
        }).then(res=>{
            return res.json()
        }).then(data => console.log(data))
        .catch(error=> console.log('ERROR'))
    }
    

  return (
    <div className='container bg-img'>
      <div class="relative flex flex-col justify-center h-screen overflow-hidden">
        <div class="s-card w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-primary lg:max-w-xl">
            <h1 class="text-3xl font-semibold text-center text-primary">Sign Up</h1>
            <form class="form space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label class="label">
                        <span class="text-base label-text">Username</span>
                    </label>
                    <input type="text" placeholder="Username" class="w-full input input-bordered" name="username" value={formvalue.username} onChange={handleChange} />
                </div>
                <div>
                    <label class="label">
                        <span class="text-base label-text">Email</span>
                    </label>
                    <input type="text" placeholder="Email Address" class="w-full input input-bordered" name='email' value={formvalue.email} onChange={handleChange}/>
                </div>
                <div>
                    <label class="label">
                        <span class="text-base label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password"
                        class="w-full input input-bordered" name='password' value={formvalue.password} onChange={handleChange}/>
                </div>
                <div>
                    <button class="btn btn-block btn-primary mb-2">Sign Up</button>
                </div>
                <span>Already have an account?
                    <a href="#" class="hover:text-primary hover:underline"> Login</a></span>
            </form>
        </div>
    </div>
    </div>
  )
}

export default SignUp
