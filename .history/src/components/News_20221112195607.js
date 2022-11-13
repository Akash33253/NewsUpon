import React,{useEffect,useState} from 'react'
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [article,setArticle]=useState([]);
  const [loading,setloading]=useState(true);
  const [page,setpage]=useState(1);
  const [totalResults,settotalResults]=useState(0);
  capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  componentDidMount = async()=>{
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
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
   
  return (
    <div>
      
    </div>
  )
}

export class News extends Component {
  
  // async updateNews(){
  // }
  
  // handleNextClick=async ()=>{
  //   this.setState({
  //     page : this.state.page +1
  //   })
  //   this.updateNews();
  // }
  // handlePrevClick=async ()=>{
  //   this.setState({
  //     page : this.state.page -1
  //   })
  //   this.updateNews();
  // }
  render() {
    return (
      <div className="container my-3">
        <h2>{this.capitalizeFirstLetter(props.category)} Headlines</h2>
      {this.state.loading&&<Spinner/>}
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length!==this.state.totalResults}
          loader={<Spinner/>}
          >
        <div className="container">

        <div className="row">
          {!this.state.loading&&this.state.article.map((element) => {
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
        {/* <div className="container d-flex justify-content-sm-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark btn-sm mx-2" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark btn-sm mx-2" onClick={this.handleNextClick}>Next &rarr;</button>

        </div> */}
      </div>
    );
  }
}

export default News;
