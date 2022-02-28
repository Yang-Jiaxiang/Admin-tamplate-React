import "./App.css";
import Menu from "./component/menu";
import CreateNews from "./page/CreateNews";
import ClassOptionsSetup from "./page/ClassOptionsSetup";
import TurnImage from "./page/TurnImage";
import PostList from "./page/PostList";
import { Grid, Paper } from "@mui/material";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Grid container style={{ width: "100%", margin: "0 auto" }}>
        <Grid item xs={3}>
          <Menu />
        </Grid>
        <Grid item xs={9}>
          <div className="contentpage">
            <Switch>
              <Route path="/CreateNews" exact>
                <CreateNews />
              </Route>
              <Route path="/PostList" exact>
                <PostList />
              </Route>
              <Route path="/ClassOptionsSetup" exact>
                <ClassOptionsSetup />
              </Route>
              <Route path="/TurnImage" exact>
                <TurnImage />
              </Route>
            </Switch>
          </div>
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;
