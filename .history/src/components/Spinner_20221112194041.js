import loading from './loading.gif'
import React from 'react'

export default function Spinner() {
  return (
    <div>
      
    </div>
  )
}

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spinner
