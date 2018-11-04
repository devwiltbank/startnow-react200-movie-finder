import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

// This function takes the store and returns an object
// that's passed to the props of the component.
// Adding React-redux and mapStore to props connects it all.
function mapStateToProps(store) {
    return {
        movieName: store.movie.movieName,
        movieData: store.movie.movieData,
        showMovieData: store.movie.showMovieData
    };
}

// This might look odd, but connect returns a function,
// that is then called with the component itself.

export default connect(mapStateToProps)(MovieSearchContainer);
