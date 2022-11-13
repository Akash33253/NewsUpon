import loading from './loading.gif'
import React from 'react'

export default function Spinner() {
  return (
    <div>
      <img src={loading} alt="loading" />
      
    </div>
  )
}

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
      </div>
    )
  }
}

export default Spinner
