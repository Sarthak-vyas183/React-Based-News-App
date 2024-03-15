import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Loader from './loader';
import PropTypes from 'prop-types';


export class News extends Component {
static defaultProps = {
    country : "in",
    pageSize : 8,
    category : "general"
}
static propTypes = {
  country : PropTypes.string,
  pageSize : PropTypes.number,
  category : PropTypes.string,
 }
  constructor() {
    super();
    this.state = {
      articles: this.articles, 
      loading: false,
      page : 1
    }
  }
    async updateNews(pageNo) {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=a08e6303e4dc4c299a8910e7bb29347c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({articles:parsedData.articles,totalResult:parsedData.totalResult , loading : false});
    }

  async componentDidMount() {
   
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=a08e6303e4dc4c299a8910e7bb29347c&page=1&pageSize=${this.props.pageSize}`;

    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({articles:parsedData.articles,totalResult:parsedData.totalResult , loading : false});
  }

  handleprevclick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=a08e6303e4dc4c299a8910e7bb29347c&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parsedData = await data.json();
    
    // this.setState({
    //   page : this.state.page -1,
    //   articles:parsedData.articles,
    //   loading : false
    // });
    this.setState({page : this.state.page-1})
    this.updateNews()
  }
   handlenextclick = async () => {
    // if(!(this.state.page + 1 > Math.ceil(this.state.totalResult/this.props.pageSize))) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=a08e6303e4dc4c299a8910e7bb29347c&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;

    //     this.setState({loading:true})
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
      
    //   this.setState({
    //     page : this.state.page +1,
    //     articles:parsedData.articles,
    //     loading : false
    //   });
    // } 
    this.setState({page : this.state.page+1})
    this.updateNews()

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
                  <NewsItem  title={element.title?element.title.slice(0,45):""} description = {element.description?element.description.slice(0,88):""} imgUrl = {element.urlToImage} newUrl = {element.url} author = {element.author} date = {element.publishedAt} source = {element.source.name}/>
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
