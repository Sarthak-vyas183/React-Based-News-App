import React, { Component } from 'react'

export class navbar extends Component {
  render() {
    return (
   <div className='footer'>
        <section className="head"> MonkeyNews.in</section>
         <section className='footer-container'>
             <div>
                <h3>About</h3>
              
                 <p>who we are</p>
                 <p>Blog</p>
                 <p>work with us</p>
                 <p>Investor Relations</p>
                 <p>Report Froud</p>
                 <p>contact us</p>
                
                 </div>
             <div>
              <h3>Our Offices</h3>
              
                 <p>Bhopal - head </p>
                 <p>Indore</p>
                 <p>lucknow</p>
                 <p>Delhi</p>
                 <p>Mumbai</p>
             
             </div>
             <div>
                 <h3>Learn More</h3>
                  
                     <p>Privacy</p>
                     <p>Security</p>
                     <p>Terms</p>
                     <p>Sitemap</p> 
                 
             </div>
          
             <div>
                 <h3>Social link</h3>
                 <span className='social-link'>
                     <a href="/"><i className="fa-brands fa-facebook"></i></a>
                     <a href="/"><i className="fa-brands fa-instagram"></i></a>
                     <a href="/"><i className="fa-brands fa-whatsapp"></i></a>
                     <a href="/"><i className="fa-brands fa-youtube"></i></a>
                 </span>
             </div>
        </section>
        <div className="line"></div>
        <div className='policy'>
         <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2023-2024 © Foodies' Adda™ Ltd. All rights reserved.</p>
         </div> 
      
     </div>
    )
  }
}

export default navbar
