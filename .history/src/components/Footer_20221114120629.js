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
                        <li><Link Link className="nav-link"     to="/business">Business</Link></li>
                        <li><Link Link className="nav-link"to="/entertainment">Entertainment</Link></li>
                        <li><Link Link className="nav-link"to="/health">Health</Link></li>
                        <li><Link Link className="nav-link"to="/science">Science</Link></li>
                        <li><Link Link className="nav-link"to="/technology">Technology</Link></li>
                    </ul>
                    <p id="footPara">
                       This is News WebApp,I made it using react,Html,Css,JavaScript also used Bootstrap and many other refernces for desgining the app.This app is design such that is provides live news to you but unfortunately the Free new API i have used provide only localhost request.So I am showing the Sample news.
                       Please Provide Suggestion and Feedback to me for fusther improvments.
                       <a rel="noreferrer" href="mailto:akashgtcatopk@gmail.com.c om">Email me</a>
                    </p>
                    </div>
                    <div className="copyRight">
                        2022  &#169;  NewsUpon
                    </div>
            </div>
        </div>
    )
}
