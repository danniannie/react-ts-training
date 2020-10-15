import React from 'react';
import { Link } from 'react-router-dom';
require("halfmoon/css/halfmoon-variables.min.css");
import halfmoon from 'halfmoon'

const Page = ({children}) => {
    return (

    <div className="page-wrapper with-navbar with-sidebar" data-sidebar-type="full-height">
    <nav className="navbar">
       
      <button className="btn btn-primary" type="button" onClick={() => halfmoon.toggleDarkMode()}>🌚</button>
    </nav>
    <div className="sidebar">
    Danni's Page Of Wonder
    <br></br>
      <Link to='/'> Home</Link>
     <p>All the sidebar things you need.
       </p> 
    </div>
    <div className="content-wrapper">
        {children}
        </div>

 
   
  
  </div>

    );
};

export default Page;