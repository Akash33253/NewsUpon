
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import React from 'react'

export default function News() {
  return (
    <div>
      
    </div>
  )
}

export class News extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
      loading: true,
      page : 1,
      totalResults:0
    };
  }

  capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  async componentDidMount(){
   this.props.setProgress(10)
   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   this.setState({
     loading:true
    })
    let data = await fetch(url);
    this.props.setProgress(30)
    let parsedData = await data.json(); 
    this.props.setProgress(60)
    this.setState({
      article : parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    })
   this.props.setProgress(100)
  }
  // async updateNews(){
  // }
  fetchMoreData =async () => {
    this.setState({
      page : this.state.page+1
    })
    console.log(this.state.page)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a7db5f87250545b6a62e2927a729622f&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json(); 
    this.setState({
      article : this.state.article.concat(parsedData.articles),
      loading:false
    })
  };
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
        <h2>{this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
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
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark btn-sm mx-2" onClick={this.handleNextClick}>Next &rarr;</button>

        </div> */}
      </div>
    );
  }
}

export default News;
