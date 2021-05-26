
import './App.css';
import './kosign_logo_800x323.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect,
  BrowserRouter as Router,
  Route,
   Switch
} from 'react-router-dom';
import Home from './Pages/home';
import SignUp from './Pages/signup';
import Login from './Pages/login';
import { useState,useEffect } from 'react';
import NewTicket from './Pages/newticket';
import BCHeader from './Components/header';
import MutedIssues from './Pages/MutedIssues';


function App() {
  useEffect(() => {
    document.title = "KOSIGN HDS"
  }, []);
  return (
    <Router>
      <div>
        <BCHeader/>
        <Switch>
          <Route exact path="/">
            { localStorage.getItem("userid")!==null  ?  <Home />:<Redirect to="/login" /> } 
          </Route>
          <Route exact path="/issues">
            {localStorage.getItem("userid")!==null  ?  <Home />:<Redirect to="/login" />}  
          </Route>
          <Route exact path="/newticket">
            {localStorage.getItem("userid")!==null ?  <NewTicket />:<Redirect to="/login" /> }
          </Route>
          <Route exact path="/issuesMuted">
            {localStorage.getItem("userid")!==null ?  <MutedIssues />:<Redirect to="/login" /> }
          </Route>
          <Route exact path="/signup">
             
             { localStorage.getItem("userid")!==null  ?  <Redirect to="/issues" />:<SignUp /> }
          </Route>
          <Route exact path="/login">
            { localStorage.getItem("userid")!==null  ?  <Redirect to="/issues" />:<Login /> }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
