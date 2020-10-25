import React from "react"
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import './tailwind.output.css';
import Home from "./pages/index"
import Layout from "./components/global/layout"
import Room from "./pages/meeting-room"
import "./App.css"
function App() {
  return (

      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/meeting-room/:roomId">
            <Room />
          </Route>
        </Switch>
      </Layout>
  );
}

export default App;
