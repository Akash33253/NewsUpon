import loading from './loading.gif'
import React from 'react'

export default function Spinner() {
  return (
    <div className='ctext-centre'>
      <img src={loading} alt="loading" />
    </div>
  )
}

