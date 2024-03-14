import './App.css';
import  React ,{Component} from 'react'
import Navbar from './component/navbar';
import News from './component/News';
import Footer from './component/footer';
export default class App extends Component {
   render() {
    return (
      <>
      <Navbar/>
   
      <News pageSize={5} category={"sport"}/>
      <Footer/>
      </>
    )
  }
}