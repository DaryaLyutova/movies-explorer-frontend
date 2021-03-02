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
import Profile from '../Profile/Profile';
import moviesCards from '../../utils/moviesCards';
import user from '../../utils/user';
import moviesApi from '../../utils/MoviesApi';


function App() {
  const location = useLocation();
  const [isNavVisible, setIsNavVisible] = React.useState(false);
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  let moviesList = [];
  if (localStorage.getItem('moviesList')) {
    moviesList = JSON.parse(localStorage.getItem('moviesList'));
  }

  const [isGetMoviesCards, setIsGetMoviesCards] = React.useState(moviesList);
  const [isTurnOn, setIsTrunOn] = React.useState(false);
  const [isRrequestRes, setIsReqwestRes] = React.useState({
    text: '',
    visible: false
  })

  function handelPreloader() {
    setIsTrunOn(!isTurnOn);
  };


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

  function handleNavClose() {
    setIsNavOpen(false);
  }

  // функция загрузки данных о фильмах
  function handleLoadignCards(name) {
    setIsReqwestRes({
      text: '',
      visible: false
    });
    localStorage.removeItem('moviesList');
    moviesApi.getInitialCards()
      .then((data) => {
        let someMovies = data.filter((item) => {
          if (item.nameRU.includes(name)) {
            return item;
          }
        });
        setIsTrunOn(false);
        return someMovies;
      }).then((someMovies) => {
        localStorage.setItem('moviesList', JSON.stringify(someMovies));
        return someMovies;
      })
      .then((someMovies) => {
        if (someMovies.length === 0) {
          setIsReqwestRes({
            text: 'Ничего не найдено',
            visible: true
          });
          setIsGetMoviesCards(someMovies);
        } else {
          setIsGetMoviesCards(someMovies);
        }
      })
      .catch((err) => {
        setIsReqwestRes({
          text: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
          visible: true
        });
      })
  }

  return (
    <div className="app">
      <Header visible={isNavVisible} onNavOpen={handaleNavOpen} />
      <Navigation
        visible={isNavVisible}
        navOpen={isNavOpen}
        navClose={handleNavClose} />
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
            turnOn={isTurnOn}
            preloaderOn={handelPreloader}
            reqwestRes={isRrequestRes}
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
      <Footer />
    </div>
  );
}

export default App;
