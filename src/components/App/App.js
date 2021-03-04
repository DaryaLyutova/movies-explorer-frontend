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
import moviesCards from '../../utils/moviesCards';
import user from '../../utils/user';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const location = useLocation();
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
  // const [isSaveMoviesCard, setIsSaveMoviesCard] = React.useState([])
  // console.log(isGetMoviesCards);
  // прелоадер
  const [isTurnOn, setIsTrunOn] = React.useState(false);
  // ответ при запросе фильмов
  const [isRrequestRes, setIsReqwestRes] = React.useState({
    text: '',
    visible: false
  })

  function handelPreloader() {
    setIsTrunOn(!isTurnOn);
  };


  function handaleNavVisible() {
    if (loggedIn) {
      setIsNavVisible(true);
    } else { setIsNavVisible(false) };
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
  const history = useHistory();

  // функция регистрации
  function registerUser(name, email, password, resetForm) {
    mainApi.register(name, email, password).then(() => {
      resetForm();
      history.push('/signin');
    }).catch((err) => {
      alert(err);
    });
  }

  // проверка токена и данные email 
  function handeleLogin() {
    const token = localStorage.getItem('token');
    if (token !== null) {
      mainApi.getToken(token)
        .then((data) => {
          if (data) {
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
    handeleLogin();
  }, [loggedIn]);

  //функция удаления токена
  function signOut() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    history.push('/');
  }

  // запрос данных пользователя
  function getUser() {
    mainApi.getUserInfo()
    .then((userData) => {
      console.log(userData)
      setCurrentUser(userData);
    }).catch((err) => {
      alert(err);
    })
  }
  
  // функция авторизации
  function authorizeUser(email, password, message, resetForm) {
    mainApi.authorize(email, password).then((data) => {
      if (data) {
        resetForm();
        handeleLogin();
        getUser();
        history.push('/');
      } else {
        alert(message);
      }
    }).catch((err) => {
      alert(err);
    });
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
        console.log(err)
        setIsReqwestRes({
          text: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
          visible: true
        });
      })
  }

  // React.useEffect(() => {
  //   mainApi.getSaveMovies().then((saveMoviesCards) => {
  //     if (saveMoviesCards.length === 0) {
  //       setIsReqwestRes({
  //         text: 'Нет сохраненных фильмов',
  //         visible: true
  //       });
  //       setIsSaveMoviesCard([]);
  //     } else {
  //       setIsSaveMoviesCard(saveMoviesCards);
  //     }
  //   }).catch((err) => {
  //     console.log(err)
  //     setIsReqwestRes({
  //       text: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
  //       visible: true
  //     });
  //   })
  // },[isSaveMoviesCard]);

  // // функция добавления фильмов в избранное
  // function makeSaveMovie(moviesCard) {
  //   mainApi.saveMovie(moviesCard).then((movie) => {
  //     setIsSaveMoviesCard([...isSaveMoviesCard, movie]);
  //   }).catch((err) => {
  //     console.log(err);
  //   })
  // }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Header visible={isNavVisible} onNavOpen={handaleNavOpen} />
        <Navigation
          visible={isNavVisible}
          navOpen={isNavOpen}
          navClose={handleNavClose} />
        <Switch>
          <Route path="/signin">
            <Login
              onLogin={authorizeUser} />
          </Route>
          <Route path="/signup">
            <Register onRegistration={registerUser} />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <ProtectedRoute path="/movies"
            loggedIn={loggedIn}
            component={Movies}
            moviesCards={isGetMoviesCards}
            onLoadignCards={handleLoadignCards}
            turnOn={isTurnOn}
            preloaderOn={handelPreloader}
            reqwestRes={isRrequestRes}
          // onSaveMovie={makeSaveMovie} 
          />
          <ProtectedRoute path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            moviesCards={moviesCards}
          // reqwestRes={isRrequestRes}
          />
          <ProtectedRoute path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            user={user}
            signOut={signOut} />
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
