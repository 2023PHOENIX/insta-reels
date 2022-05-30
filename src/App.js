// eslint-disable-next-lin
import "./App.css";
import Feed from "./Components/Feed";
import Login from "./Components/Login";
import PageNotFound from "./Components/PageNotFound";
import Profile from "./Components/Profile";
import Signup from "./Components/Signup";

import {
  BrowserRouter as Router,
  Switch,
  Route,  Redirect,
} from "react-router-dom";
import { AuthContext, AuthContextProvider } from "./Context/AuthContext";
import React, { useContext } from "react";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <RedirectToFeed path="/login" comp={Login}></RedirectToFeed>
          <RedirectToFeed path="/signup" comp={Signup}></RedirectToFeed>

          <PrivateRoute path="/feed" comp={Feed}></PrivateRoute>
          <PrivateRoute path="/profile" comp={Profile}></PrivateRoute>

          {/* <Route path="/Feed">
            <Feed />
          </Route> */}
          {/* <Route path="/profile">
            <Profile />
          </Route> */}

          <Route path="/" exact>
            <Feed />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

function PrivateRoute(props) {
  // console.log("private Route", props);
  let Component = props.comp;
  // check -> are you loggedIN
  let cUser = useContext(AuthContext);
  console.log(cUser);
  // cuser-> null ->logi page
  // cuser-> anything
  return (
    <Route
      {...props}
      render={(props) => {
        // logic
        return cUser !== null ? (
          <Component {...props}></Component>
        ) : (
          <Redirect {...props} to="/login"></Redirect>
        );
      }}
    ></Route>
  );
}

function RedirectToFeed(props) {
  let Component = props.comp;
  let cUser = useContext(AuthContext);
  console.log(cUser);
  return (
    <Route
      {...props}
      render={(props) => {
        return cUser ? (
          <Redirect {...props} to="/feed"></Redirect>
        ) : (
          <Component {...props}></Component>
        );
      }}
    ></Route>
  );
}

export default App;
