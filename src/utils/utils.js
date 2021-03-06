const  handelChooseMovie = (data, name) => {
    let someMovies = data.filter((item) => {
        if (item.nameRU.includes(name)) {
            return item;
        }
    });
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
      })
      return movies;
};

export default { handelChooseMovie };
