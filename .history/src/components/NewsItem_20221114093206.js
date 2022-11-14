import React from 'react'

export default function NewsItem(props) {
  let {newsURL,title,description,imgURL,publishedAt,author,source} = props;
  return (
      <div className="my-3 card1">
        <div className="card bg-dark text-light">
          <img src={imgURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
              <span className="badge rounded-pill text-bg-secondary">{source}</span>
            </p>
            <p className="card-text"><small className="text-muted">By - {author} on {new Date(publishedAt).toGMTString()}</small></p>
            <a href={newsURL} rel="noreferrer" target="_blank"className="btn btn-sm btn-outline-light">
              Read More
            </a>
          </div>
        </div>
      </div>
  )
}



