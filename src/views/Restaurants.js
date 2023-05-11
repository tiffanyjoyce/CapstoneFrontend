import React, {useState, useEffect} from 'react'
import restaurant from "../images/restaurant.jpeg"
import "./Restaurants.css"
import { Link } from 'react-router-dom'

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([])
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
      }).then(data => {console.log(data?.data?.data);
        const allRestaurants =data?.data?.data
        setRestaurants(allRestaurants)
      })
      .catch(error => console.log("ERROR"))
    }

  return (
    <div className='r-container'>
      <div className='img-container'>
        <img className='restaurant-img'src={restaurant}/>
        <h1 className='title'>Restaurants</h1>
      </div>
      <div className="r-card card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-center">Search Restaurants by City</h2>
    <form className="form-control w-full max-w-xs" onSubmit={handleSubmit}>
  <input type="text" placeholder="Where to?" className="input input-bordered w-full max-w-xs" name='location' value={formvalue} onChange={handleChange}/>
    <div className="card-actions justify-end mt-3">
      <button className="btn btn-primary">Search</button>
    </div>
    </form>
  </div>
</div>
      <div className='rests'>
        {restaurants && restaurants.map((restaurant)=>{
          return(
            <div key = {restaurant.restaurantsId} className="rest-cards card w-96 bg-base-100 shadow-xl">
  <figure><img className='rest-img'src={restaurant.heroImgUrl} alt="N/A" /></figure>
  <div className="card-body">
    <h2 className="card-title">{restaurant.name}</h2>
    <p className='food-type'>{restaurant.establishmentTypeAndCuisineTags != [] && restaurant.establishmentTypeAndCuisineTags[0]}</p>
    <p className='stars'>{restaurant.averageRating} <i class="fa-sharp fa-solid fa-star"></i> ({restaurant.userReviewCount})</p>
    <p className='price'>{restaurant.priceTag}</p>
    <p className='status'>{restaurant.currentOpenStatusText}</p>
    <div className="card-actions justify-end">
                  <div className='flexcontainer'>
                    <div className='item1'>
                <Link to= {`/`}><button className="btn btn-primary">View</button></Link>
                </div>
                <div className='item2'>
                <Link><button className='btn btn-primary'>Add to Itinerary</button></Link>
                </div>
                <div className='item3'>
                <Link><i class="fa-regular fa-heart"></i></Link>
                </div>
                </div>
                </div>
  </div>
</div>
          )
        })}
      </div>
    </div>
  )
}

export default Restaurants
