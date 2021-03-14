import { DEFAULT_IMG, DAFAULT_TRAILER, } from './consts';
const handlerSelect = (data, name) => {
  let someMovies = data.filter((item) => {
    if (item.nameRU.includes(name)) {
      return item;
    }
  });
  return someMovies;
};

const handlerSelectMovie = (data, name) => {
  const movies = data.map((item) => {
    return item = {
      country: (item.country !== null && item.country !== undefined ? item.country : 'Неизвестно'),
      director: (item.director !== null && item.director !== undefined ? item.director : 'Неизвестно'),
      duration: item.duration,
      year: item.year,
      description: (item.description !== null && item.description !== undefined ? item.description : 'Неизвестно'),
      image: (item.image !== null && item.image !== undefined ? `https://api.nomoreparties.co${item.image.url}` : DEFAULT_IMG),
      trailer: (item.trailer !== undefined && item.trailer !== undefined ? item.trailer : DAFAULT_TRAILER),
      thumbnail: (item.image !== null && item.image !== undefined ? `https://api.nomoreparties.co${item.image.url}` : DEFAULT_IMG),
      nameRU: item.nameRU,
      nameEN: (item.nameEN !== null && item.nameEN !== undefined ? item.nameEN : 'Неизвестно'),
      movieId: item.id,
    };
  });
  return movies;
};

const filterDuration = (data) => {
  let someMovies = data.filter((item) => {
    if (item.duration < 40) {
      return item;
    }
  });
  return someMovies;
}

export { handlerSelectMovie, handlerSelect, filterDuration };
