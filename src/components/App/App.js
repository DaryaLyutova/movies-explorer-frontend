import React from 'react';
import './App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
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
import moviesApi from '../../utils/MoviesApi';


function App() {
  const location = useLocation();
  const [isNavVisible, setIsNavVisible] = React.useState(false);
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [isGetMoviesCards, setIsGetMoviesCards] = React.useState([]);

  function handaleNavVisible() {
    if (location.pathname === '/movies'
      || location.pathname === '/saved-movies'
      || location.pathname === '/profile') {
      setIsNavVisible(false);
    } else { setIsNavVisible(true) };
  }

  React.useEffect(() => {
    handaleNavVisible();
  }, [location.pathname]);

  function handaleNavOpen() {
    setIsNavOpen(true);
  };

  function handleNAvClose() {
    setIsNavOpen(false);
  }

  // функция загрузки данных о фильмах
  function handleLoadignCards() {
    console.log('hi');
    moviesApi.getInitialCards().then((data) => {
      console.log(data);
      setIsGetMoviesCards(data);
    }).catch((err) => {
      alert(err);
    })
  }

  return (
    <div className="app">
      <Header visible={isNavVisible} onNavOpen={handaleNavOpen} />
      <Navigation visible={isNavVisible} navOpen={isNavOpen} navClose={handleNAvClose} />
      <Switch>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies
            moviesCards={isGetMoviesCards}
            onLoadignCards={handleLoadignCards} 
            />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies moviesCards={moviesCards} />
        </Route>
        <Route path="/profile">
          <Profile user={user} />
        </Route>
        <Route path="/*">
          <PageNotFound />
        </Route>
      </Switch>
      <Preloader />
      <Footer />
    </div>
  );
}

export default App;
