import React, {useState, useEffect} from 'react'

const Restaurants = () => {
    const [data, setData] = useState([{}])

    useEffect (() => {
      fetch("/restaurants/api").then(
        response => response.json()
      ).then(
        ({data})=> {
          data=data.data
          setData(data)
          console.log(data)
        }
      )
    }, [])
  return (
    <div>
      <h1>this will be the restaurants page</h1>
      {/* <h1>{JSON.stringify(data.data.data[0].averageRating)}</h1> */}
    </div>
  )
}

export default Restaurants
