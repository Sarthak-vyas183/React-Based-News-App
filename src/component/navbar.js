import React, { Component } from 'react'

export class navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">About</a>
        </li>
       <li><a class="nav-link" href="/">business</a></li>
       <li><a class="nav-link" href="/">intertainment</a></li>
       <li> <a class="nav-link" href="/">general</a></li>
       <li> <a class="nav-link" href="/">health</a></li>
       <li><a class="nav-link" href="/">science</a></li>
       <li> <a class="nav-link" href="/">sports</a></li>
       <li> <a class="nav-link" href="/">technology</a></li>
      
      </ul>
     
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default navbar
