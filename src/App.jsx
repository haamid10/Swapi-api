import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Films from './Components/Films'


const App = () => {
  const [starwars , setStarwars] = useState()

  console.log(starwars)
  
  useEffect (()=>{
    const getStarwars =()=>{
      axios
      .get('https://swapi.dev/api/people')
      .then( res => {
        // console.log(res.data)
        setStarwars(res.data)
      }).catch(error =>{
        console.log(error)
      })
    }
    getStarwars()
  },[])
  return (


    <div>
      <h1>daarax</h1>
</div>
  )
}

export default App
