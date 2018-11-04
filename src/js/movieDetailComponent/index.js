import { connect } from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';

// This function takes the store and returns an object
// that's passed to the props of the component.
// Adding React-redux and mapStore to props connects it all.
function mapStoreToProps(store) {
    return {
        movieDetail: store.movieDetail.movieDetail
    };
}

// This might look odd, but connect returns a function,
// that is then called with the component itself.

export default connect(mapStoreToProps)(MovieDetailContainer);
