import React from 'react';
import { Link } from 'react-router-dom';
import { getMovieDetail } from './movieDetailAction';

export default class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);

   
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const id = this.props.match.params.id;
    dispatch(getMovieDetail(id));
  }

  render() {
    const { movieDetail } = this.props;
       
    return (
      <div>
        
         <Link to={'/'} className='md-back-link'><i className="fas fa-chevron-left"></i>Go Back</Link>
        <h1 className='md-title'>Movie Details</h1>
        <div className='md-movie-details'>
          <div className='image-parent'>
            <img id='poster' src={`${movieDetail.Poster}`} />
          </div>
          <div className='md-movie-text'>
            <h3 id='movieTitle'>{movieDetail.Title}</h3>
            <div className='md-movie-group'>
              <p id='released'>Released {movieDetail.Released}</p>
              <p id='runtime'>{movieDetail.Runtime}</p>
              <p id='rated'>{movieDetail.Rated}</p>
            </div>
            <p>{movieDetail.Plot}</p>
            <p>{movieDetail.Awards}</p>
            <ul>
              <li>
                <label>Metascore </label>{movieDetail.Metascore}/100
              </li>
              <li>
                <label>IMDB </label>{movieDetail.imdbRating}/10
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
