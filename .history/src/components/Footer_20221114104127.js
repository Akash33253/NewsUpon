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
            <a href="https://www.facebook.com/profile.php?id=100005285706307" rel="noreferrer" target="_blank">
            <img src={facebookLogo} className="footLogo"alt="" />
            </a>
            <a href="https://www.instagram.com/akash_33253" rel="noreferrer" target="_blank">
            <img src={instaLogo} className="footLogo"alt="" />
            </a>
            <a href="https://www.linkedin.com/in/akash-gupta-56a40824a" rel="noreferrer" target="_blank">
            <img src={linkedinLogo} className="footLogo"alt="" />
            </a>
            </div>
            <div>
            </div>
    </div>
  )
}
