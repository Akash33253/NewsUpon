import loading from './loading.gif'
import React from 'react'

export default function Spinner() {
  return (
    <div style={{display : "block", margin:"auto",backgroundColor}}>
      <img src={loading} alt="loading" />
    </div>
  )
}

