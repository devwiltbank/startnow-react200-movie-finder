//import { types } from './movieSearchAction';

const defaultState = {
    movieName: '',
    movieData: '',
    movieCount: '',
    showMovieData: false,
};

export default function MovieSearchReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'UPDATE_MOVIE': {
            return {
                ...state,
                movieName: payload
            }
        }
        case 'GET_MOVIE_DATA_FULFILLED': {
            return {
                ...state,
                movieData: payload,
                showMovieData: true
            }
        }
        default: {
            return state
        }
    }

}