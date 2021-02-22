import React from 'react';
import './App.css';
import { Route, Switch, } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import Preloader from '../../Preloader/Preloader';
import Profile from '../Profile/Profile';

import moviesCards from '../../utils/moviesCards';
import user from '../../utils/user';


function App() {

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route exact path="/">
          <Main />
          <Footer />
        </Route>
        <Route path="/movies">
          <Movies moviesCards={moviesCards} />
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies moviesCards={moviesCards} />
          <Footer />
        </Route>
        <Route path="/profile">
          <Profile user={user} />
        </Route>
        <Route path="/*">
          <PageNotFound />
        </Route>
      </Switch>
      <Preloader />
    </div>
  );
}

export default App;
