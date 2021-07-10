import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
const Navbar = () =>{
    return (
       <div class='navbar'>
           <nav>
               <div class='brand'>
                 <Link to='/' style={{textDecoration:'none'}}> <h3>Home</h3> </Link>
               </div>
               <ul>
                  <Link to='/about'  style={{textDecoration:'none'}}> <li><a href='/about'>About me</a></li></Link>
               </ul>
           </nav>
       </div>
    );
}
export default Navbar;