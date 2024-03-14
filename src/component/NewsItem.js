import React, { Component } from 'react'

export class NewsItem extends Component {
 
  render() {
    let {title , description , imgUrl , newUrl , author , date , source} = this.props;
    return (
      
<div>
  
  <div className="card" style={{width: "18rem"}}>
  <img src={!imgUrl?"https://c.ndtvimg.com/2023-12/4l1gu19o_sbi-_625x300_04_December_23.jpeg":imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"> {title}  <span class="position-absolute top-0 left-10  translate-small badge rounded-pill bg-success" style={{left:'75%' , zIndex:1 }}>
   {source}
    
  </span></h5>
    <p className="card-text">{description}</p>
    <p className='card-text'><small className='text-muted'> By {!author? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
    <a href={newUrl} target='blank' className="btn btn-sm btn-primary">Read more</a>
  </div>
  </div>
  
</div>
   
    )
  }
}

export default NewsItem
