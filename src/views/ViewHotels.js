import React, {useState} from 'react'
import { useParams } from 'react-router-dom'

const ViewHotels = () => {
  let {hotelId} = useParams();
  const [hotel, setHotel] = useState([])
  async function hotelDetails(){
    fetch('http://127.0.0.1:5000/hotel/details',{
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
        "Access-Control-Allow-Origin": "*",
      },
      body:JSON.stringify({
        hotelId: hotelId
      })
    }).then(res=>{
      return res.json()
    }).then (data=> {console.log(data?.data?.data);
      const details = data?.data?.data
      setHotel(details)
    }).catch(error => console.log('ERROR'))
  }
  hotelDetails()
  return (
    <div>
      <div>
      </div>
    </div>
  )
}

export default ViewHotels
