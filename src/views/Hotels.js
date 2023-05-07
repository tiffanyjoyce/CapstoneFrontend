import React, {useState, useEffect} from 'react';
import hotel from '../images/hotel5.jpeg';
import './Hotels.css';
import { toast } from 'react-hot-toast';

const Hotels = () => {
  const [formvalue, setValue] = useState({location:'', checkin:'', checkout:''});
  const handleChange=(event)=>{
    const {name, value}= event.target;
    setValue({...formvalue, [name]:value});
    console.log(formvalue)
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    findLocation()
    setValue('')
    console.log(formvalue);
  }
    // const locationform = document.querySelector('.form');

    // locationform.addEventListener('submit', event => {
    //   event.preventDefault();

    //   const formData = new FormData(locationform);
    //   const data = Object.fromEntries(formData)

    //   fetch('/location/api', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    //   }).then(response=> response.json())
    //   .then(data=> console.log(data))
    //   .catch(error => console.log(error))
    // });

async function findLocation(){
  fetch("http://127.0.0.1:5000/api/location", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin":"*",
    },
    body:JSON.stringify({
      location: formvalue.location,
      checkin: formvalue.checkin,
      checkout: formvalue.checkout,
    })
  }).then(res => { 
    return res.json()
  }).then(data => console.log(data))
  .catch(error => console.log("ERROR"))
}
  // const FindLocationId = async () => {
  //   const location = {
  //     location: value,
  //   };
  //   const headers = {
  //     "Content-Type": "application/json",
  //     "Access-Control-Allow-Origin":"*",
  //   };
  //   const locationPromise = axios.post(local_url + "/location/api", location, headers);

  //   toast
  //     .promise(locationPromise, {
  //       loading: "Finding location...",
  //       success: "Finding Hotels...",
  //       error: "Failed to find location",
  //     }).then((res) => {
  //       window.location.reload();
  //     })
  //     .catch((err) => console.log(err));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   FindLocationId();
  //   setValue('');
  // };
  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // }
    // const [data, setData] = useState([{}])

    // useEffect (() => {
    //   fetch("/hotels/api").then(
    //     response => response.json()
    //   ).then(
    //     data => {
    //       setData(data)
    //       console.log(data)
    //     }
    //   )
    // }, [])
  return (
    <div className='container'>
      <div className='img-container shadow-md'>
        <img className= "hotel-img" src={hotel}/>
      </div>
      <h1 className='hotels-text'>Hotels</h1>
      <div className="hotel-card card w-96 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">Search Hotels By Location</h2>
    <form className="form form-control w-full max-w-xs" onSubmit={handleSubmit}>
  <label className="label">
    <span className="label-text">Where do you want to go?</span>
  </label>
  <input type="text" placeholder="Where to?" className="location input input-bordered w-full max-w-xs text-black" name="location" value={formvalue.location} onChange={handleChange}/>
<div className='flex-container'>
<div className="form-control w-full max-w-xs">
  {/* <label className="label">
    <span className="label-text">What is your name?</span>
    <span className="label-text-alt">Top Right label</span>
  </label> */}
  <input type="text" placeholder="Check-in" className="start-date input input-bordered w-full max-w-xs text-black" name = 'checkin' value = {formvalue.checkin} onChange={handleChange} />
  <label className="label">
    <span className="label-text-alt">Check-in Date</span>
    {/* <span className="label-text-alt">Bottom Right label</span> */}
  </label>
</div>
<div className="form-control w-full max-w-xs">
  {/* <label className="label">
    <span className="label-text">What is your name?</span>
    <span className="label-text-alt">Top Right label</span>
  </label> */}
  <input type="text" placeholder="Check-out" className="end-date input input-bordered w-full max-w-xs text-black" name='checkout' value = {formvalue.checkout} onChange= {handleChange} />
  <label className="label">
    {/* <span className="label-text-alt">Bottom Left label</span> */}
    <span className="label-text-alt">Check-out Date</span>
  </label>
</div>
</div>
    <div className="card-actions justify-end">
      <button className="btn btn-secondary text-primary">Search</button>
    </div>
    </form>
  </div>
</div>

      <h1>Don't know the dates yet? That's okay, you can always change them later!</h1>
        {/* <h1>{JSON.stringify(data?.data?.data[0])}</h1> */}
    </div>
  )
}

export default Hotels
