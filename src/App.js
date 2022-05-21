import './App.css';
import Feed from './Components/Feed';
import Login from './Components/Login';
import PageNotFound from './Components/PageNotFound';
import Profile from './Components/Profile';
import Signup from './Components/Signup';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';




function App() {
  return (
      <Router>
        <Switch> 

          <Route path = "/feed"> 
            <Feed/>
          </Route>
          
          <Route path = "/Login"> 
            <Login/>
          </Route>
          <Route path = "/Profile"> 
            <Profile/>
          </Route>
          <Route path = "/signup"> 
            <Signup/>
          </Route>
          <Route path = "/" exact> 
            <Feed/>
          </Route>
          <Route> 
            <PageNotFound/>
          </Route>
          
        </Switch>

      </Router>
    
  );
}

export default App;
