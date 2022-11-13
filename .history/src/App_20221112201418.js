import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default function App() {
  country="in"
  pageSize= 9
  apiKey = process.env.REACT_APP_NEWS_API
  state={
   progress:0
  }
  return (
    <div>
      
    </div>
  )
}


export default class App extends Component {
   setProgress=(progress)=>{
      this.setState({
        progress: progress
      })
   }
  render() {
    return (
      <div>
        <Router>
        <Navbar updateCountry={this.updateCountry}/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        transitionTime={2000}
        shadow={true}
        height={3}
        // onLoaderFinished={() => this.setProgress(0)}
         />
         <Routes>
          <Route  exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="1"pageSize={this.pageSize} country={this.country} category="general"/>}></Route>
          <Route  exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="2"pageSize={this.pageSize} country={this.country} category="business"/>}></Route>
          <Route  exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="3"pageSize={this.pageSize} country={this.country} category="entertainment"/>}></Route>
          <Route  exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="4"pageSize={this.pageSize} country={this.country} category="health"/>}></Route>
          <Route  exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="5"pageSize={this.pageSize} country={this.country} category="science"/>}></Route>
          <Route  exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="6"pageSize={this.pageSize} country={this.country} category="sports"/>}></Route>
          <Route  exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="7"pageSize={this.pageSize} country={this.country} category="technology"/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}
