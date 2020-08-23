import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import LandingPage from '../LandingPage/LandingPage';
import HabitPage from '../NewHabitPage/NewHabitPage';
import ToDoPage from '../NewToDoPage/NewToDoPage';
// import UserSummaryPage from '../UserSummaryPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import UserSummary from '../../components/UserSummary/UserSummary';
class App extends Component {
  constructor() {
    super();
    this.state = {
      // ...this.getInitialState(),
      user: userService.getUser()
    };
  }
  // getInitialState() {
  //   return {
  //   };
  // }
  handleSignupOrLogin = () => {
    this.setState({
      user: userService.getUser()
    });
  }
  handleLogout = () => {
    userService.logout();
    this.setState({
      user: null
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">Welcome to HabitZen</header> <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path="/signup" render={({ history }) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }
          />
          <Route exact path="/login" render={({ history }) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }
          />

          <Route exact path="/" render={({ history }) =>
            <LandingPage
              history={history}
            />
          }
          />
          <Route exact path='/todo' render={({ history, props }) =>
            <ToDoPage
              {...props}
            />
          }
          />
          <Route exact path='/habit' render={({ history, props }) =>
            <HabitPage
              {...props}
            />
          }
          />
          <Route exact path='/user' render={({ history, props }) =>
            <UserSummary
              {...props}
            />
          }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
