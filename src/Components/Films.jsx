import React from 'react'

const Films = ({film}) => {
  console.log(film)
  return (
    <div>
      <h2>{film.title}</h2>
    </div>
  )
}

export default Films
