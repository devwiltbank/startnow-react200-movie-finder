import { combineReducers } from 'redux';
import movieSearchReducer from './movieSearchComponent/movieSearchReducer';
import movieDetailReducer from './movieDetailComponent/movieDetailReducer';

const rootReducer = combineReducers({
    movie: movieSearchReducer,
    movieDetail: movieDetailReducer
});

export default rootReducer;