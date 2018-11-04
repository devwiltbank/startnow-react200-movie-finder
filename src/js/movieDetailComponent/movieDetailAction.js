import axios from 'axios';

export const getMovieDetail = (value) => {
    return {
        type: 'GET_MOVIE_DETAIL',
        payload: axios.get('/api/details?movie=' + value)
            .then(({ data }) => {
                return data;
            }
            )
    }
};