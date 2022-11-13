import loading from './loading.gif'
import React from 'react'

export default function Spinner() {
  return (
    <div className='container text-centre'>
      <img src={loading} alt="loading" />
    </div>
  )
}

