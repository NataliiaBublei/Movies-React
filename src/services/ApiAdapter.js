export default class ApiAdapter {
  _apiBase = 'https://api.themoviedb.org';
  _imageBase = 'https://image.tmdb.org/t/p/w500';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`, {
      headers: {
        Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODJlN2Q1M2M3MTQ3OTFmZjczZmU4NzA3ODdmM' +
          'DgxNSIsInN1YiI6IjU3ZWE0NjY0OTI1MTQxMTA4OTAwOGZjNCIsInNjb3BlcyI6WyJhcGl' +
          'fcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lEEivZliSc_G_UGJbP8p1LRlPXWu3U9erTCsUnRWP_U'
      }
    });

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return await res.json();
  };

  getAllFilms = async (page) => {
    const res = await this.getResource(`/3/discover/movie?page=${page}`);

    return res.results.map(this._transformFilm);
  };

  getAllGenres = async () => {
    const res = await this.getResource(`/3/genre/movie/list`);

    return res.genres.map(this._transformGenre);
  };

  _transformFilm = (film) => {
    return {
      id: film.id,
      title: film.title,
      genreIds: film.genre_ids,
      overview: film.overview,
      releaseDate: film.release_date,
      posterPath: `${this._imageBase}${film.poster_path}`,
      voteAverage: film.vote_average
    };
  };

  _transformGenre = (genre) => {
    return {
      id: genre.id,
      name: genre.name
    };
  };
}
