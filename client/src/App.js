import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Landing from "./Components/Landing/Landing";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
class App extends Component {
  render() {
    const user = false;
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
           
            <Route path="/login" component={Login} />
            {user && (
              <Route exact path="/">
                <Home user={user} />
              </Route>
            )}
             <Route exact path="/" component={Landing} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
