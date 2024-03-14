import React, { Component } from 'react'
import Loader from '../component/spinner.gif'
export class loader extends Component {
  render() { 
    return (
      <div className='text-center'>
        <img src={Loader} alt=""/>
      </div>
    )
  }
}               
export default loader
