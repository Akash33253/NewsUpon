import loading from './loading.gif'
import React from 'react'

export default function Spinner() {
  return (
    <div className='text-centre'>
      <img src={loading} alt="loading" />
    </div>
  )
}

