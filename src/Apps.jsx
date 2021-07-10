import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Menu from './Menu.jsx';
import App from './App.jsx';
const Apps = () =>{
   return(
      <>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route exact path='/about' component={Menu} />
        </Switch>
      </>
   );
}
export default Apps;