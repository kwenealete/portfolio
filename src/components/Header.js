import React from 'react';
import { NavLink, } from 'react-router-dom'

const Header = () => (
  
     <header className="header" >
      <h2 id="myName" >Monya Kwene Alete</h2>
      <div id="menu" >
        <div id="links" >
          <NavLink to="/" activeClassName ="is-active" exact={true} >Home Page</NavLink>
          <NavLink to="/portfolio" activeClassName ="is-active" exact={true} >My portfolio</NavLink>
          <NavLink to="/contact" activeClassName ="is-active">Contact Me</NavLink>  
          <NavLink to="/about" activeClassName="is-active" >About Me</NavLink></div> 
        menu
          </div>
      
      
     </header>
     
  )

  export default Header 