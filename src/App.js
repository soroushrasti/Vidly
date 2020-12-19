import React, { Component } from "react";
import Movies from "./components/movies";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from './components/navBar'
import MovieForm from './components/movieForm'
import LoginForm from './components/logingForm'
import Customers from './components/customers'
import NotFound from './components/notFound'
import Registration from './components/registrationForm'
import NewMovieForm from './components/newMovieForm'
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <NavBar />
      <main className="container">
          <Switch>
            <Route path="/movies" exact component={Movies} />
            <Route path="/movies/new" exact component={NewMovieForm} />
            <Route path="/movies/:id" exact component={MovieForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/registration" component={Registration} />
            <Route path="/customers" component={Customers} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
                </main>
        </React.Fragment>
    );
  }
}

export default App;
