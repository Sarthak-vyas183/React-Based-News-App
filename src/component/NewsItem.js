import React, { Component } from 'react'

export class NewsItem extends Component {
 
  render() {
    let {title , description , imgUrl , newUrl} = this.props;
    return (
<div>
  <div className="card" style={{width: "18rem"}}>
  <img src={!imgUrl?"https://c.ndtvimg.com/2023-12/4l1gu19o_sbi-_625x300_04_December_23.jpeg":imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newUrl} target='blank' className="btn btn-sm btn-primary">Read more</a>
  </div>
  </div>
  
</div>
   
    )
  }
}

export default NewsItem
