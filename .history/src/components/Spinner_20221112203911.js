import loading from './loading.gif'
import React from 'react'

export default function Spinner() {
  return (
    <div className='container-fluid' style={{display:"inline-block",margin:"auto",justifyContent:"center",ali}}>
      <img src={loading} alt="loading" />
    </div>
  )
}

