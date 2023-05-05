import './Home.css';
import { useState, useEffect } from 'react';
import hotel from '../images/hotel4.webp'
import rental from '../images/rental1.jpeg'
import food from '../images/food2.jpeg'
import attraction from '../images/attraction3.webp'
import waterfall from '../images/waterfall2.jpg'

function Home() {
    const [data, setData] = useState([{}])

    useEffect (() => {
      fetch("/location/api").then(
        response => response.json()
      ).then(
        data => {
          setData(data)
          console.log(data)
        }
      )
    }, [])
    return (

        <div className='container'>
        <div className='imgContainer mt-10'>
            <img className = "homeImg" src={waterfall} />
            </div>
            <div className="homeContainer card w-96 shadow-sm">
                    <h2 className="exploreTitle card-title text-center">Adventure Awaits</h2>
                    <p className='exploreText text-center'>Let's plan your next journey together!</p>
                    <div className="exploreButton card-actions justify-end">
                        <a href="#homeHeader" className='smooth'><button className="btn btn-primary">Explore</button></a>
                </div>
    </div>
            <h1 className='homeHeader font-semibold' id='homeHeader'>Plan ahead to minimize stress and maximize your vacation!</h1>
            <h2 className='homeSub text-center pb-7'>Filter by category and add what you like to your travel itinerary</h2>
            <div class="grid-container">
  <div className="Hotels card w-50 bg-base-100 shadow-xl">
  <figure className='img'><img src={hotel} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="hotel-title card-title">Hotels</h2>
    <div className="hotel-action card-actions justify-start">
      <a href='/hotels'><button className="hotel-button btn btn-primary">Explore</button></a>
    </div>
  </div>
  </div>
  <div className="Vacation-Rentals card w-50 bg-base-100 shadow-xl">
  <figure className='img'><img src={rental} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Vacation Rentals</h2>
    <div className="card-actions justify-start">
    <a href='/rentals'><button className="btn btn-primary">Explore</button></a>
    </div>
  </div>
  </div>
  <div className="Restaurants card w-50 bg-base-100 shadow-xl">
  <figure className='img'><img src={food} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Restaurants</h2>
    <div className="card-actions justify-start">
    <a href='/restaurants'><button className="btn btn-primary">Explore</button></a>
    </div>
  </div>
  </div>
  <div className="Attractions card w-50 bg-base-100 shadow-xl">
  <figure className='img'><img src={attraction} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Attractions</h2>
    <div className="card-actions justify-start">
    <a href='/attractions'><button className="btn btn-primary">Explore</button></a>
    </div>
  </div>
</div>
</div>
            <h1>{JSON.stringify(data.data)}</h1>
        </div>
    )

}
export default Home