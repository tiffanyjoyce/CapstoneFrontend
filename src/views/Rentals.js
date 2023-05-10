import React, {useState, useEffect} from 'react'

const Rentals = () => {
  const [rentals, setRentals] = useState([])
  const[formvalue, setValue] = useState({location:'', checkin: '', checkout:''})
  const handleChange= (event)=>{
    const {name, value}= event.target;
    setValue({...formvalue, [name]:value});
    console.log(formvalue)
}
  const handleSubmit= (event)=>{
    event.preventDefault();
    findRentals()
    setValue('')
    console.log(formvalue)
  }
  async function findRentals(){
    fetch("http://127.0.0.1:5000/api/rentals", {
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
    }).then(data => {console.log(data?.data?.rentals?.rentals);
    const allRentals = data?.data?.rentals?.rentals
    setRentals(allRentals)
    })
    .catch(error => console.log("ERROR"))
  }
  return (
    <div>
      <div className='img-container'>
        <img src= '/'></img>
      </div>
      <h1 className='hotels-text'>Rentals</h1>
      <div className="hotel-card card w-96 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">Search Rentals By Location</h2>
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
    <div>{rentals && rentals.map((rental)=>{
      return(
        <div key= {rental.id} className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{rental.name}</h2>
    <p>Starting at ${rental.rate.details[0].rate.amount}</p>
    <p>{rental.rental.averageRatingNumber} <i class="fa-sharp fa-solid fa-star"></i> ({rental.rental.userReviewCount})</p>
    <p>{rental.rental.roomCount} Bed | {rental.rental.bathCount} Bath | Sleeps {rental.rental.sleepCount}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View</button>
    </div>
  </div>
</div>
      )
    })}</div>
    </div>
  )
}

export default Rentals
