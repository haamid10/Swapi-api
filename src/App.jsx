import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Films from './Components/Films'


const App = () => {
  const [posts , setPosts] = useState([])

  console.log(posts)

  
  
  useEffect (()=>{
  // fetchPhoto()
    const getPosts =()=>{
      axios
      .get('https://swapi.dev/api/people/1 ')
      .then( res => {
        console.log(res.data )
        setPosts(res.data)
      }).catch(error =>{
        console.log(error)
      })
    }
    // async function fetchPhoto() {
    //   const res= await fetch(`https://jsonplaceholder.typicode.com/posts`)
    //   const data=  await res.json();
    //   // console.log(data)
    //   setPosts(data)
      
    //  } 

    getPosts()

  
  },[])



  return (
    <div>
      <h2 className='text-3xl'>posts</h2>
      {/* <Films posts={posts}/> */}
      <h1>{posts.name}</h1>
      <h1>{posts.height}</h1>
      <h1>{posts.homeworld}</h1>
      {/* {posts.films.map(film =>{
        <li>
          {film}
        </li>
      })} */}
    </div>
  )
}

export default App
