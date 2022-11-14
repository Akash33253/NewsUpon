import React from 'react'
import facebookLogo from './pnglogos/facebookLogo.png'
import instaLogo from './pnglogos/instaLogo.png'
import linkedinLogo from './pnglogos/linkedinLogo.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='text-light container-fluid' id='foot'>
            <div className="box2">
                <div className='footContent'>
                    <ul id="footList">
                        <li><Link Link className="nav-link" to="/business">Business</Link></li>
                        <li><Link Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                        <li><Link Link className="nav-link" to="/health">Health</Link></li>
                        <li><Link Link className="nav-link" to="/science">Science</Link></li>
                        <li><Link Link className="nav-link" to="/technology">Technology</Link></li>
                    </ul>
                    <p id="footPara">
                        This is News WebApp, I made it using react, Html, Css, JavaScript also used Bootstrap and many other references for designing the app. This app is designed such that is provides live News to you but unfortunately the Free News API I have used services only localhost request. So, I am showing the Sample news. <br/>
                        Please Provide Suggestion and Feedback to me for further improvements.
                        <br/>
                        <a rel="noreferrer" href="mailto:akashgtcatopk@gmail.com">Email me</a>
                    </p>
                </div>
                <div className="copyRight">
                    2022  &#169;  NewsUpon
                </div>
            </div>
        </div>
    )
}
