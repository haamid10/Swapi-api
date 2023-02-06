import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Films from './Components/Films'


const App = () => {
  const [starWars , setStarWars] = useState([])

  console.log(starWars)
  
  useEffect (()=>{
    const getStarWars =()=>{
      axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then( res => {
        // console.log(res.data )
        setStarWars(res.data)
      }).catch(error =>{
        console.log(error)
      })
    }
    getStarWars()
  },[])


  return (
    <div>
      <h2 className='text-3xl'>posts</h2>
      {starWars.map(film=>{
        <h1>{film.title}</h1>
        // console.log(film.title)
       
      })}
    </div>
  )
}

export default App
