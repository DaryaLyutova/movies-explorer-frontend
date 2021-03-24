import React from 'react';
import './App.css';
import { Route, Switch, useLocation, useHistory, Redirect, } from 'react-router-dom';
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
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { handlerSelectMovie, handlerSelect } from '../../utils/utils';
import { OK_RES, BAD_RES } from '../../utils/consts';

function App() {
  const location = useLocation();
  const history = useHistory();
  //данные пользователя
  const [currentUser, setCurrentUser] = React.useState({});
  // стайт переменные для навигации по сайту
  const [isNavVisible, setIsNavVisible] = React.useState(false);
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  // переменная для локального хранилища отобранных фильмов
  let moviesList = [];
  if (localStorage.getItem('moviesList')) {
    moviesList = JSON.parse(localStorage.getItem('moviesList'));
  }

  const [isGetMoviesCards, setIsGetMoviesCards] = React.useState(moviesList);
  const [isSaveMoviesCard, setIsSaveMoviesCard] = React.useState([]);
  const [isSaveMoviesVisible, setIsSaveMoviesVisible] = React.useState([]);

  // ответ при запросе фильмов
  const [isRrequestRes, setIsReqwestRes] = React.useState({
    text: '',
    visible: false
  });
  // прелоадер
  const [isTurnOn, setIsTrunOn] = React.useState(false);
  // сообщения при регистрации, авторизации и редактировании профиля
  const [signupMessege, setSignupMessege] = React.useState('');
  const [loginMessege, setLoginMessege] = React.useState('');
  const [updateUserMessege, setUpdateUserMessege] = React.useState('');

  React.useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      Promise.all([mainApi.getUserInfo(), mainApi.getSaveMovies()])
        .then(([userData, saveMoviesCards]) => {
          setCurrentUser(userData);
          setIsSaveMoviesCard(saveMoviesCards);
          setIsSaveMoviesVisible(saveMoviesCards);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, []);

  function handlerNavVisible() {
    if (loggedIn) {
      setIsNavVisible(true);
    } else { setIsNavVisible(false) };
  }

  React.useEffect(() => {
    handlerNavVisible();
  }, [location.pathname]);

  function handlerNavOpen() {
    setIsNavOpen(true);
  };

  function handlerNavClose() {
    setIsNavOpen(false);
  }

  // функция регистрации
  function registerUser(data) {
    setSignupMessege('')
    mainApi.register(data).then((data) => {
      if (data) {
        history.push('/signin');
      } else {
        setSignupMessege('Что-то пошло не так')
      }
    }).catch((err) => {
      setSignupMessege('Что-то пошло не так')
      console.log(err);
    });
  }

  // проверка токена и данные email 
  function handlerLogin() {
    const token = localStorage.getItem('token');
    if (token !== null) {
      mainApi.getToken(token)
        .then((data) => {
          if (data) {
            setCurrentUser(data);
            setLoggedIn(true);
            history.push('/movies');
          }
        }).catch((err) => {
          console.log(err);
          signOut();
        })
    } else signOut();
  }
  // сохранение токена для повторного входа
  React.useEffect(() => {
    handlerLogin();
  }, [loggedIn]);

  //функция удаления токена
  function signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('moviesList');
    setLoggedIn(false);
    history.push('/');
  }

  // функция авторизации
  function authorizeUser(data) {
    setLoginMessege('');
    mainApi.authorize(data).then((data) => {
      if (data) {
        handlerLogin();
        setCurrentUser(data);
        history.push('/');
      } else {
        setLoginMessege('Неверный логин или пароль')
      }
    }).catch((err) => {
      setLoginMessege('Неверный логин или пароль')
      console.log(err);
    });
  }

  // функция обаботки данных о пользователе
  function handlerUpdateUser(data) {
    mainApi.setUserInfo(data)
      .then((dataInfo) => {
        if (dataInfo) {
          setCurrentUser(dataInfo.user);
          setUpdateUserMessege('Данные успешно редактированы');
        } else {
          setUpdateUserMessege('Произошла ошибка');
        }
      }).catch((err) => {
        setUpdateUserMessege('Произошла ошибка');
        console.log(err);
      })
  }

  // функция загрузки данных о фильмах
  function handlerLoadignMovies(name) {
    setIsTrunOn(true);
    setIsReqwestRes({
      text: '',
      visible: false
    });
    const moviesListDefault = JSON.parse(localStorage.getItem('moviesListDefault'));
    localStorage.removeItem('moviesList');
    if (moviesListDefault) {
      const movieSelect = handlerSelect(moviesListDefault, name);
      if (movieSelect.length === 0) {
        setIsReqwestRes({
          text: OK_RES,
          visible: true
        });
        setIsGetMoviesCards(movieSelect);
      } else {
        setIsGetMoviesCards(movieSelect);
      }
      setIsTrunOn(false);
    } else {
      moviesApi.getInitialCards()
        .then((movies) => {
          const moviesSave = handlerSelectMovie(movies, name);
          localStorage.setItem('moviesListDefault', JSON.stringify(moviesSave));
          return moviesSave;
        })
        .then((movies) => {
          const movieSelect = handlerSelect(movies, name);
          localStorage.setItem('moviesList', JSON.stringify(movieSelect));
          return movieSelect;
        })
        .then((movieSelect) => {
          if (movieSelect.length === 0) {
            setIsReqwestRes({
              text: OK_RES,
              visible: true
            });
            setIsGetMoviesCards(movieSelect);
          } else {
            setIsGetMoviesCards(movieSelect);
          }
          setIsTrunOn(false);
        })
        .catch((err) => {
          console.log(err);
          setIsTrunOn(false);
          setIsReqwestRes({
            text: BAD_RES,
            visible: true
          });
        })
    }
  }

  // функция добавления фильмов в избранное
  function makeSaveMovie(moviesCard) {
    const movie = isSaveMoviesCard.find((movie) => movie.movieId === moviesCard.movieId);
    if (!movie) {
      mainApi.saveMovie(moviesCard)
        .then((movie) => {
          setIsSaveMoviesVisible(movie = [movie, ...isSaveMoviesVisible]);
        }).catch((err) => {
          console.log(err);
        })
    } else {
      mainApi.deleteMovie(movie._id)
        .then(() => {
          // // Формируем новый массив на основе имеющегося, удаляя из него карточку
          const newMovies = isSaveMoviesVisible.filter((movie) => movie.movieId !== moviesCard.movieId);
          // // Обновляем стейт
          const movies = setIsSaveMoviesVisible(newMovies);
          return movies;

        }).catch((err) => {
          console.log(err);
        })
    }
  }

  // обработчик поиска по соханенным фильмам
  function handlerSaveMovieSelect(name) {
    const movies = handlerSelect(isSaveMoviesCard, name);
    if (movies.length === 0) {
      setIsReqwestRes({
        text: OK_RES,
        visible: true
      });
      return setIsSaveMoviesVisible(movies);
    } else {
      return setIsSaveMoviesVisible(movies);
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Header visible={isNavVisible} onNavOpen={handlerNavOpen} />
        <Navigation
          visible={isNavVisible}
          navOpen={isNavOpen}
          navClose={handlerNavClose} />
        <Switch>
          <Route path="/signin">
            <Login
              onLogin={authorizeUser}
              buttonMassege={loginMessege} />
          </Route>
          <Route path="/signup">
            <Register
              onRegistration={registerUser}
              buttonMassege={signupMessege} />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <ProtectedRoute path="/movies"
            // loggedIn={loggedIn}
            component={Movies}
            moviesCards={isGetMoviesCards}
            onLoadignCards={handlerLoadignMovies}
            turnOn={isTurnOn}
            reqwestRes={isRrequestRes}
            onSaveMovie={makeSaveMovie}
            saveMoviesCards={isSaveMoviesCard}
          />
          <ProtectedRoute path="/saved-movies"
            // loggedIn={loggedIn}
            component={SavedMovies}
            moviesCards={isSaveMoviesVisible}
            saveMoviesCards={isGetMoviesCards}
            onLoadignCards={handlerSaveMovieSelect}
            reqwestRes={isRrequestRes}
            onSaveMovie={makeSaveMovie}
          />
          <ProtectedRoute path="/profile"
            // loggedIn={loggedIn}
            component={Profile}
            signOut={signOut}
            onUpdateUser={handlerUpdateUser}
            messege={updateUserMessege} />
          <Route path="/*">
            <PageNotFound />
          </Route>
          <Route>
          {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/" />}
          </Route>
        </Switch>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
