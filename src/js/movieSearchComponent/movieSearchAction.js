import axios from 'axios';

// create keys for the action types
// export const types = {
//     GET_MOVIE_DATA: 'GET_MOVIE_DATA',
//     UPDATE_MOVIE: 'UPDATE_MOVIE',
//  }
 
export const updateMovie = (value) => {
    return {
        type: 'UPDATE_MOVIE',
        payload: value
    }
};

export const getMovieData = (value) => {
    return {
        type: 'GET_MOVIE_DATA',
        payload: axios.get('/api?movie=' + value)
            .then(({ data }) => {
                return data;
            }
            )
    }
};
