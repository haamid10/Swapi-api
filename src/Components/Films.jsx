import React from 'react'

const Films = (props) => {
  console.log(props)
  return (
    <div>
      <h2>xaamid</h2>
      {/* {console.log(film)} */}
      {props.posts.map(post =>{
        <li key={post.id}>
          {console.log(post)}
          {post.title}
        </li>
      })}
      {/* <h2>{film.title}</h2> */}
    </div>
  )
}

export default Films
