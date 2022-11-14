import React from 'react'
import facebookLogo from './pnglogos/facebookLogo.png'
import instaLogo from './pnglogos/instaLogo.png'
import linkedinLogo from './pnglogos/linkedinLogo.png'

export default function Footer() {
  return (
    <div className='text-light container-fluid' id='foot'>
           <div className='' id='footBrand'>
                    NewsUpon
                    <br/>
                    <img src={facebookLogo} className="footLogo"alt="" />
                    <img src={instaLogo} className="footLogo"alt="" />
                    <img src={facebookLogo} className="footLogo"alt="" />
           </div>
    </div>
  )
}
