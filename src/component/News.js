import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Loader from './loader';

export class News extends Component {
 
  constructor() {
    super();
    this.state = {
      articles: this.articles, 
      loading: false,
      page : 1
    }
  }
  async componentDidMount() {
   
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=62fe6222fa2d49a9be904f8d85d5929f&page=1&pageSize${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({articles:parsedData.articles,totalResult:parsedData.totalResult , loading : false});
  }

  handleprevclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=62fe6222fa2d49a9be904f8d85d5929f&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({
      page : this.state.page -1,
      articles:parsedData.articles,
      loading : false
    });
  }
   handlenextclick = async () => {
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResult/this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=62fe6222fa2d49a9be904f8d85d5929f&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json();
      
      this.setState({
        page : this.state.page +1,
        articles:parsedData.articles,
        loading : false
      });
    } 
}

  render() {
    return (
      <div>
        <div className='container my-4'>
          <h1 className='text-center '>MonkeyNews headline : </h1>
          {this.state.loading && <Loader/>}
          <div className="row my-4">
          {this.state.articles && this.state.articles.map((element) => {
              return    <div className="col-md-4" key={element.url}>
                  <NewsItem  title={element.title?element.title.slice(0,45):""} description = {element.description?element.description.slice(0,88):""} imgUrl = {element.urlToImage} newUrl = {element.url}/>
                       </div>
          } )}
          </div>

          <div className='container btn-primary d-flex justify-content-between'>
  <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handleprevclick} > &larr; Previous</button>
  <button type="button"  disabled={this.state.page > Math.ceil(this.state.totalResult/this.props.pageSize)} className="btn btn-dark" onClick={this.handlenextclick} >  Next &rarr;</button>
  </div>
        </div>
      </div>
    )
  }
}

export default News;
