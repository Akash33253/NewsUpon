import loading from './loading.gif'
import React from 'react'

export default function Spinner() {
  return (
    <div className='container-fluid' style={{display : "block", margin:"auto",backgroundColor:"red"}}>
      <img src={loading} alt="loading" />
    </div>
  )
}

