import React from 'react'
import facebookLogo from './pnglogos/facebookLogo.png'
import instaLogo from './pnglogos/instaLogo.png'
import linkedinLogo from './pnglogos/linkedinLogo.png'

export default function Footer() {
  return (
    <div className='text-light container-fluid' id='foot'>
           <div className='' id='footBrand'>
                    NewsUpon
           </div>
            <div id='footLogoContainer'>
            <a href="https://www.facebook.com/profile.php?id=100005285706307" target="__blank" rel="noreferrer" target="_blank">
            <img src={facebookLogo} className="footLogo"alt="" />
            </a>
            <img src={instaLogo} className="footLogo"alt="" />
            <img src={linkedinLogo} className="footLogo"alt="" />
            </div>
    </div>
  )
}
