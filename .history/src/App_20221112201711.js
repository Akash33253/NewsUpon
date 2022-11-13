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
  const country="in"
  const pageSize= 9
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress,setpro]=useState(0);
  const setProgress=(p)=>{
     setpro(p);
  }
  return (
    <div>
      
    </div>
  )
}


export default class App extends Component {
  render() {
    return (
      
    )
  }
}
