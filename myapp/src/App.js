import './App.css';
import Menu from './page/menu';
import Title from './page/title'
import './js/indexJS'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { route } from 'express/lib/router';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Title />
      </div>
      
    </Router>
  );
}

export default App;
