import { Link } from 'react-router-dom'
import React from 'react'
import weather from './weather.png'

export default function Navbar() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fc6dc32bfbmshc4b2e489a68e7e7p133787jsn64336d02983e',
            'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
        }
    };
    
    fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    let d = new Date();
    return (
        <div id="navigation">
            <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsUpon</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link Link className="nav-link" aria-current="page" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link Link className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link Link className="nav-link" aria-current="page" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link Link className="nav-link" aria-current="page" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link Link className="nav-link" aria-current="page" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link Link className="nav-link" aria-current="page" to="/technology">Technology</Link>
                            </li>
                        </ul>
                    </div>
                    <span id="time"><img id='weather'src={weather} alt="" />{d.toDateString()}</span>
                </div>
            </nav>
        </div>
    )
}








