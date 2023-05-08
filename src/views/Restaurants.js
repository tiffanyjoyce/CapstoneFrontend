import React, {useState, useEffect} from 'react'
import restaurant from "../images/restaurant.jpeg"
import "./Restaurants.css"

const Restaurants = () => {
    const [formvalue, setValue] = useState('')
    const handleChange=(event)=>{
      setValue(event.target.value);
      console.log(formvalue)
    }
    const handleSubmit=(event)=>{
      event.preventDefault();
      findRestaurants()
      setValue('')
      console.log(formvalue);
    }
    async function findRestaurants(){
      fetch("http://127.0.0.1:5000/api/restaurants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin":"*",
        },
        body:JSON.stringify({
          location: formvalue
        })
      }).then(res => { 
        return res.json()
      }).then(data => console.log(data?.data?.data))
      .catch(error => console.log("ERROR"))
    }

  return (
    <div className='container'>
      <div className='img-container'>
        <img className='restaurant-img'src={restaurant}/>
        <h1 className='title'>Restaurants</h1>
      </div>
      <div className="r-card card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-center">Search Restaurants by Location</h2>
    <form className="form-control w-full max-w-xs" onSubmit={handleSubmit}>
  <label className="label">
    <span className="label-text">City</span>
  </label>
  <input type="text" placeholder="Where to?" className="input input-bordered w-full max-w-xs" name='location' value={formvalue} onChange={handleChange}/>
    <div className="card-actions justify-end mt-3">
      <button className="btn btn-primary">Search</button>
    </div>
    </form>
  </div>
</div>
      <h1 className='message'>Want to search restaurants near your hotel/rental? Search from your calendar</h1>
      {/* <h1>{JSON.stringify(data.data.data[0].averageRating)}</h1> */}
    </div>
  )
}

export default Restaurants
