import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import Banner from './components/Banner'
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import general from "./newsFile/general.json"
import business from "./newsFile/business.json"
import technology from "./newsFile/technology.json"
import sports from "./newsFile/sports.json"
import health from "./newsFile/health.json"
import science from "./newsFile/science.json"
import entertainment from "./newsFile/entertainment.json"
export default function App() {
  // const country="in"
  // const pageSize= 9
  // const apiKey = process.env.REACT_APP_NEWS_API
  const [progress,setpro]=useState(0);
  const setProgress=(p)=>{
     setpro(p);
  }
  return (
    <div>
        <Router>
        <Navbar/>
        <Banner/>
        <LoadingBar
        color='#ffffff'
        progress={progress}
        transitionTime={2000}
        shadow={true}
        height={2}
         />
         <Routes>
          <Route  exact path="/" element={<News setProgress={setProgress}  key="1" category={general} heading=''}/>}></Route>
          <Route  exact path="/business" element={<News setProgress={setProgress} key="2"category={business}/>}></Route>
          <Route  exact path="/entertainment" element={<News setProgress={setProgress}  key="3" category={entertainment}/>}></Route>
          <Route  exact path="/health" element={<News setProgress={setProgress}  key="4" category={health}/>}></Route>
          <Route  exact path="/science" element={<News setProgress={setProgress}  key="5" category={science}/>}></Route>
          <Route  exact path="/sports" element={<News setProgress={setProgress}  key="6" category={sports}/>}></Route>
          <Route  exact path="/technology" element={<News setProgress={setProgress}  key="7" category={technology}/>}></Route>
          {/* <Route  exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="1"pageSize={pageSize} country={country} category="general"/>}></Route>
          <Route  exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="2"pageSize={pageSize} country={country} category="business"/>}></Route>
          <Route  exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="3"pageSize={pageSize} country={country} category="entertainment"/>}></Route>
          <Route  exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="4"pageSize={pageSize} country={country} category="health"/>}></Route>
          <Route  exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="5"pageSize={pageSize} country={country} category="science"/>}></Route>
          <Route  exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="6"pageSize={pageSize} country={country} category="sports"/>}></Route>
          <Route  exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="7"pageSize={pageSize} country={country} category="technology"/>}></Route> */}
        </Routes>
        </Router>
      </div>
  )
}



