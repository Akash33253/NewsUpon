import React, { Component } from "react";

export class NewsItem extends Component {
    render() {
      let {newsURL,title,description,imgURL,publishedAt,author,source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={imgURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
              <span className="badge rounded-pill text-bg-secondary">{source}</span>
            </p>
            <p className="card-text"><small className="text-muted">By - {author} on {new Date(publishedAt).toGMTString()}</small></p>
            <a href={newsURL} rel="noreferrer" target="_blank"className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
