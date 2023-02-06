import React from 'react'

const Films = ({star}) => {
  return (
    <div>
      {star.map((film)=>{
        <div>
          <h1>{film.title}</h1>
        </div>
      })}
    </div>
  )
}

export default Films
