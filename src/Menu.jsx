import React from 'react';
import './menu.css';
import image from './abc.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';
import Navbar from './components/navbar/Navbar';
const Menu = () =>{
    const url = 'https://github.com/ashbabkhan2';
  return(
    <div class='menu'>
        <Navbar />
        <div class='profile'>
            <img src={image}/>
            <div className='values'>
             <h2 class='name'>Ashbab Khan</h2>
            <h2>Web developer & Reactjs Developer and student</h2>
            <h2>Html Css Javascript and ReactJs</h2>
             <GitHubIcon onClick={()=>window.open(url,'_blank')} style={{color:'black',fill:'black'}} className='git' />
            </div>
            </div>
    </div>
  );
}
export default Menu;