import React from 'react'
import facebookLogo from './pnglogos/facebookLogo.png'
import instaLogo from './pnglogos/instaLogo.png'
import linkedinLogo from './pnglogos/linkedinLogo.png'

export default function Footer() {
    return (
        <div className='text-light container-fluid' id='foot'>
            <div className='box1' style={{ border: "2px solid white" }}>
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
            <div className="box2"style={{ border: "2px solid white" }}>
                    <div className='footContent'> 
                    <ul id="footList">
                        <li>Business</li>
                        <li>Entertainment</li>
                        <li>Health</li>
                        <li>Science</li>
                        <li>Technology</li>
                    </ul>
                    <p id="footPara">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores dolore vel eos quaerat dolorem magnam nesciunt voluptas non, ratione ab dolorum ea incidunt aliquam ullam nisi distinctio quidem quis quasi labore expedita! Id autem dolorum rem alias obcaecati, iure expedita cumque voluptates doloribus odit repellat assumenda magnam animi totam. Iure cum esse nihil facilis mollitia, obcaecati, est distinctio velit modi ratione officia neque saepe consequuntur voluptatibus atque pariatur fugiat. Tempora odio, ab sint placeat ipsam veritatis vel corrupti quod deleniti! Praesentium veniam fugiat deleniti repellendus unde, accusantium laudantium accusamus perferendis pariatur nostrum odit deserunt voluptatem libero magni adipisci, eos distinctio.
                    </p>
                    </div>
                    <div className="copyRight">
                        2022 &#169; NewsUpon
                    </div>
            </div>
        </div>
    )
}
