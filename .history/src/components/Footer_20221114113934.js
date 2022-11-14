import React from 'react'
import facebookLogo from './pnglogos/facebookLogo.png'
import instaLogo from './pnglogos/instaLogo.png'
import linkedinLogo from './pnglogos/linkedinLogo.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='text-light container-fluid' id='foot'>
            <div className='box1'>
                <div className='' id='footBrand'>
                    NewsUpon
                </div>
                <div id='footLogoContainer'>
                    <a href="https://www.facebook.com/profile.php?id=100005285706307" rel="noreferrer" target="_blank">
                        <img src={facebookLogo} className="footLogo" alt="" />
                    </a>
                    <a href="https://www.instagram.com/akash_33253" rel="noreferrer" target="_blank">
                        <img src={instaLogo} className="footLogo" alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/akash-gupta-56a40824a" rel="noreferrer" target="_blank">
                        <img src={linkedinLogo} className="footLogo" alt="" />
                    </a>
                </div>
            </div>
            <div className="box2">
                    <div className='footContent'> 
                    <ul id="footList">
                        <li>Business</li>
                        <Link Link className="nav-link" aria-current="page" to="/business">Business</Link>
                        <li>Entertainment</li>
                        <li>Health</li>
                        <li>Science</li>
                        <li>Technology</li>
                    </ul>
                    <p id="footPara">
                       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum atque, quibusdam totam quos, eos excepturi debitis molestias soluta, id illo fuga esse consequuntur saepe et repellendus accusamus ullam voluptatem dicta modi. Commodi provident magni, aliquam architecto laborum sequi minima ex quia natus quibusdam sunt eos soluta nesciunt, eius perferendis explicabo.
                    </p>
                    </div>
                    <div className="copyRight">
                        2022  &#169;  NewsUpon
                    </div>
            </div>
        </div>
    )
}
