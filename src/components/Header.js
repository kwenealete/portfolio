import React from 'react';
import { NavLink, } from 'react-router-dom'

const Header = () => (
  
     <header className="header" >
     {/* <img src="/home/hyf/Desktop/react-course-project/portfolio/public/pics/alete.jpg" alt="alete" ></img>
       */}
      
          <NavLink className="links" to="/" activeClassName ="is-active" exact={true} >Home Page</NavLink>
          <NavLink className="links" to="/portfolio" activeClassName ="is-active" exact={true} >My portfolio</NavLink>
          <NavLink className="links" to="/contact" activeClassName ="is-active">Contact Me</NavLink>  
          <NavLink className="links" to="/about" activeClassName="is-active" >About Me</NavLink> 
     </header>
     
  )

  export default Header 