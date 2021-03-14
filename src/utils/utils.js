const handlerSelect = (data, name) => {
  let someMovies = data.filter((item) => {
    if (item.nameRU.includes(name)) {
      return item;
    }
  });
  return someMovies;
};

const handlerSelectMovie = (data, name) => {
  const someMovies = handlerSelect(data, name);
  const movies = someMovies.map((item) => {
    return item = {
      country: item.country,
      director: item.director,
      duration: item.duration,
      year: item.year,
      description: item.description,
      image: `https://api.nomoreparties.co${item.image.url}`,
      trailer: item.trailerLink,
      thumbnail: `https://api.nomoreparties.co${item.image.url}`,
      nameRU: item.nameRU,
      nameEN: item.nameEN,
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
