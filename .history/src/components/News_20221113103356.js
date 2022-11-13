import React,{useEffect,useState} from 'react'
import NewsItem from "./NewsItem";
import Spinner from "./Spinner"
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [article,setArticle]=useState([]);
  const [loading,setloading]=useState(true);
  const [page,setpage]=useState(1);
  const [totalResults,settotalResults]=useState(0);
  const capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const updateNews = async()=>{
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
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json(); 
    setArticle(article.concat(parsedData.articles))
    setloading(false)
  };
  useEffect(()=>{
    updateNews();
  },[])
  return (
    <>
      {/* <Banner/> */}
     <div className="container my-3">
        <h2 className='text-center' id="heading"{capitalizeFirstLetter(props.category)} Headlines</h2>
      {loading&&<Spinner/>}
        <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length!==totalResults}
          loader={<Spinner/>}
          >
        <div className="container">

        <div className="row">
          {!loading&&article.map((element) => {
            return <div className="col-md-4 my-2" key={element.url}>
                    <NewsItem
                    newsURL={element.url}
                    title={element.title?element.title.slice(0,45):""}
                    description={element.description?element.description.slice(0,88):""}
                    imgURL={element.urlToImage?element.urlToImage:"https://thumbs.dreamstime.com/b/tv-studio-live-broadcasting-recording-show-tv-news-program-studio-video-camera-lens-lights-positioned-stage-big-68406890.jpg"}
                    publishedAt={element.publishedAt?element.publishedAt:"- - - -"}
                    author={element.author?element.author:"Uknown"}
                    source={element.source.name?element.source.name:"Nil"}
                    />
                 </div>
          })}
        </div>
        </div>
          </InfiniteScroll>
      </div>
    </>
  )
}



