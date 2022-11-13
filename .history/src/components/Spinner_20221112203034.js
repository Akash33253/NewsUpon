import loading from './loading.gif'
import React from 'react'

export default function Spinner() {
  return (
    <div style={{display : "block"}}>
      <img src={loading} alt="loading" />
    </div>
  )
}

