import loading from './loading.gif'
import React from 'react'

export default function Spinner() {
  return (
    <div style={{display:"inline-block",margin:"auto",justifyContent:"center"}}>
      <img src={loading} alt="loading" />
    </div>
  )
}

