import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./ViewHotels.css"

const ViewHotels = () => {
  let { hotelId } = useParams();
  let { indate } = useParams();
  let { outdate } = useParams()

  const [hotel, setHotel] = useState([])
  async function hotelDetails() {
    fetch('http://127.0.0.1:5000/hotel/details', {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        hotelId: hotelId,
        indate: indate,
        outdate: outdate,
      })
    }).then(res => {
      return res.json()
    }).then(data => {
      console.log(data?.data);
      const details = data?.data
      setHotel(details)
    }).catch(error => console.log('ERROR'))
  }
  useEffect(() => {
    hotelDetails()
  }, [])
  if (hotel === []) {
    return null
  }
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img className="img-1" src={hotel?.photos?.[0].urlTemplate?.split('?')[0] + "?w=800&h=600&s=1"} />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle btn-primary">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img className="img-2" src={hotel?.photos?.[1].urlTemplate?.split('?')[0] + "?w=800&h=600&s=1"} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle btn-primary">❮</a>
            <a href="#slide3" className="btn btn-circle btn-primary">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img className="img-3" src={hotel?.photos?.[2].urlTemplate?.split('?')[0] + "?w=800&h=600&s=1"} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle btn-primary">❮</a>
            <a href="#slide4" className="btn btn-circle btn-primary">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img className="img-4" src={hotel?.photos?.[3].urlTemplate?.split('?')[0] + "?w=800&h=600&s=1"} />
          <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle btn-primary">❮</a>
          </div>
        </div>
      </div>
      <div className="view-card card w-96 bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <h2 className="card-title">{hotel.title}</h2>
          <p>{hotel?.location?.address}</p>
          <p className='amentities'>Amentities include:</p>
          <details className='dropdown dropdown-bottom mb-32'>
            <summary className="m-1 btn">Amentities</summary>
          <ul className="p-2 shadown menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            {hotel?.amenitiesScreen?.map(amenity => (
              <li>{amenity?.content[0]}</li>
            ))}
          </ul>
          </details>
          {/* <p>{hotel?.amenitiesScreen?.[0].content[0]}</p>
    <p>{hotel?.amenitiesScreen?.[1].content[0]}</p>
    <p>{hotel?.amenitiesScreen?.[2].content[0]}</p>
    <p>{hotel?.amenitiesScreen?.[3].content[0]}</p>
    <p>{hotel?.amenitiesScreen?.[4].content[0]}</p> */}
          <p>{hotel.rating} <i class="fa-sharp fa-solid fa-star"></i> ({hotel?.reviews?.count})</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Itinerary</button>
          </div>
        </div>
      </div>
      <div className='attractions'>
        {hotel?.attractionsNearby?.content && hotel?.attractionsNearby?.content.map((a) => {
          return (
            <div key={a.title} className="attraction card bg-base-100 shadow-xl">
              <figure><img src={a?.cardPhoto?.urlTemplate?.split('?')[0] + '?w=600&h=300&s=1'} alt="No photo" /></figure>
              <div className="card-body">
                <h2 className="card-title">{a.title}</h2>
                <p>{a.distance}</p>
                <p>{a?.bubbleRating?.rating} <i class="fa-sharp fa-solid fa-star"></i> ({a?.bubbleRating?.numberReviews})</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View</button>
                </div>
              </div>
            </div>
          )
        })}
        </div>
        <div className='restaurants'>
          {hotel.restaurantsNearby?.content && hotel?.restaurantsNearby.content.map((r) => {
            return (
              <div key={r.title} className="restaurant card bg-base-100 shadow-xl">
                <figure><img src={r?.cardPhoto?.urlTemplate?.split('?')[0] + '?w=600&h=300&s=1'} alt="No photo" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{r.title}</h2>
                  <p>{r.distance}</p>
                  <p>{r?.bubbleRating?.rating} <i class="fa-sharp fa-solid fa-star"></i> ({r?.bubbleRating?.numberReviews})</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">View</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
            </div>
  )
}

export default ViewHotels
