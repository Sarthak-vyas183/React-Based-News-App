import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Loader from './loader';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



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
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles, 
      loading: false,
      page : 1,
      totalResults : 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
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
fetchMoreData = async () => {
 this.setState({page : this.state.page + 1})
 const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=a08e6303e4dc4c299a8910e7bb29347c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
 this.setState({loading:true})
 let data = await fetch(url);
 let parsedData = await data.json();
 this.setState({
    articles: this.state.articles.concat(parsedData.articles),
    totalResult:parsedData.totalResult ,
    loading : false});

};

 capitalizeFirstLetter =  (string)=> {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

  render() {
    return (
      <div>
          <h1 className='text-center '> Top {this.capitalizeFirstLetter(this.props.category)} headline </h1>
          <InfiniteScroll
          dataLength={this.state.articles ? this.state.articles.length : 0} 
          next={this.fetchMoreData} 
          hasMore={this.state.articles ? this.state.articles.length !== this.state.totalResults : false} 
          loader= {this.state.loading && <Loader />}
> 
         <div className="container">
          <div className="row my-4">
          {this.state.articles && this.state.articles.map((element) => {
              return    <div className="col-md-4" key={element.url}>
                  <NewsItem  title={element.title?element.title.slice(0,45):""} description = {element.description?element.description.slice(0,88):""} imgUrl = {element.urlToImage} newUrl = {element.url} author = {element.author} date = {element.publishedAt} source = {element.source.name}/>
                       </div>
          } )}
          </div>
          </div>
         </InfiniteScroll>
         
        </div>
    )
  }
}

export default News;
