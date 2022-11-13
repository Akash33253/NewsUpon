import { Link } from 'react-router-dom'
import React from 'react'

export default function Navbar() {
    let time = new Date().toLocaleString();
    const [cTime, setTime] = useState(time);
    useEffect(() => {
      setInterval(() => {
        setTime(time);
      }, 1000);
    });
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
                    <span id="time"></span>
                </div>
            </nav>
        </div>
    )
}









