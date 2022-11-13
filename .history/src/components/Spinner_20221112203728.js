import loading from './loading.gif'
import React from 'react'

export default function Spinner() {
  return (
    <div className='container-fluid' style={{ margin:"auto",justifyContent:"center"}}>
      <img src={loading} alt="loading" />
    </div>
  )
}

