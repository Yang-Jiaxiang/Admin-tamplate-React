import './App.css';
import Menu from './page/menu';
import CreateNews from './page/CreateNews';
import ClassOptionsSetup from './page/ClassOptionsSetup'
import {BrowserRouter as Router,Switch,Route, Redirect}from 'react-router-dom'
import './css/Semantic-UI-CSS/semantic.min.css'

function App() {
    return ( 
      <Router >
        <Menu/>
        <div className='contentpage'>
          <Switch>
            <Route path='/CreateNews' exact><CreateNews/></Route>ClassOptions
            <Route path='/ClassOptionsSetup' exact><ClassOptionsSetup/></Route>
          </Switch>
        </div>        
      </Router >
    );
}

export default App;