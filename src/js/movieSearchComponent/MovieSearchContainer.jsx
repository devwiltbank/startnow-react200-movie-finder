import React from 'react';
import { Link } from 'react-router-dom';
import { getMovieData, updateMovie } from './movieSearchAction'

export default class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.enter = this.enter.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchButton = this.handleSearchButton.bind(this);
  }

  enter(event) {
    if (event.key === 'Enter') {
      this.handleSearchButton
    }
  }

  handleSearchInput(event) {
    const { dispatch } = this.props;
    dispatch(updateMovie(event.target.value));
  }

  handleSearchButton() {
    const { dispatch, movieName } = this.props;
    dispatch(getMovieData(movieName));
  }


  render() {
    const { movieData, showMovieData } = this.props;
    return (
      <div>
        <div className="jumbotron bg-transparent">
          <h1 className="display-4">Movie Finder</h1>
          <p className="lead">Search OMDB for movie details</p>
          <hr className="my-4"></hr>
          <p>Enter a movie title...</p>
          <p className="lead"></p>
          <div className="input-group mb-3">
            <input onKeyDown={this.enter}
              onChange={this.handleSearchInput}
              type="text"
              className="form-control"
              id='input'
            >
            </input>
            <div className="input-group-append">
              <button onClick={this.handleSearchButton}
                className="btn btn-outline-secondary"
                id='button'
                type="button">Button
                </button>
            </div>
          </div>
          {(showMovieData) &&
            <div id='results' name='results' className='ms-results'>
              {movieData.Search.filter(movie => movie.Poster !== "N/A").map((movie, index) =>
                <div className='ms-indiv-result' key={index}>
                  <img className='ms-poster' src={`${movie.Poster}`} />
                  <div className='ms-movie'>
                    <div id='search-title'>{movie.Title}</div>
                    <div>{movie.Year}</div>
                  </div>
                  <Link to={`/movie/${movie.imdbID}`} type='button' className='btn ms-movie-button'>More Info for "{movie.Title}"</Link>
                  <p></p>
                </div>
              )}
            </div>
          }
        </div>
      </div>
    )
  }
}
