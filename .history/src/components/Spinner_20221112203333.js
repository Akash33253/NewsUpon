import loading from './loading.gif'
import React from 'react'

export default function Spinner() {
  return (
    <div style={{display:"none"}}>
      <img src={loading} alt="loading" />
    </div>
  )
}

