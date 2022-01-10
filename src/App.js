import './App.css';
import Menu from './page/menu';
import {BrowserRouter as Router,Switch,Route, Redirect}from 'react-router-dom'
import { route } from 'express/lib/router';
import {Grid,Container}from 'semantic-ui-react'

function App() {
    return ( 
      <Router >
        <Menu/>
        <Switch>
          <Route path='/posts' exact></Route>
        </Switch>
      </Router >
    );
}

export default App;