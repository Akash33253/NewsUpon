import React,{useEffect,useState} from 'react'
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [article,setArticle]=useState([]);
  const [loading,setloading]=useState(true);
  const [page,setpage]=useState(1);
  const [totalResults,settotalResults]=useState(0);
  const capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  componentDidMount = async()=>{
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);
     let data = await fetch(url);
     props.setProgress(30)
     let parsedData = await data.json(); 
     props.setProgress(60)
     setArticle(parsedData.articles);
     settotalResults(parsedData.totalResults);
     setloading(false)
     props.setProgress(100)
   }
   const fetchMoreData =async () => {
    setpage(page+1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a7db5f87250545b6a62e2927a729622f&page=${page+1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json(); 
    setArticle(article.concat(parsedData.articles))
    setloading(false)
  };
  return (
    <div>
      
    </div>
  )
}

export class News extends Component {
  render() {
    return (
      
    );
  }
}

export default News;
