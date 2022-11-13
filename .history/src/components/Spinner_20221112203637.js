import loading from './loading.gif'
import React from 'react'

export default function Spinner() {
  return (
    <div className='container-fluid' style={{display : "inline block", margin:"auto"}}>
      <img src={loading} alt="loading" />
    </div>
  )
}

