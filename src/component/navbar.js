import React, { Component } from 'react'
import { Link  } from "react-router-dom";

export class navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
       <li> <Link className="nav-link" to="/business">Business</Link></li>
       <li> <Link className="nav-link" to="/entertainment">Entertainment</Link></li>
       <li> <Link className="nav-link" to="/general">General</Link></li>
       <li> <Link className="nav-link" to="/health">Health</Link></li>
       <li> <Link className="nav-link" to="/science">Science</Link></li>
       <li> <Link className="nav-link" to="/sports">Sports</Link></li>
       <li> <Link className="nav-link" to="/technology">Technology</Link></li>
      
      </ul>
     
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default navbar
