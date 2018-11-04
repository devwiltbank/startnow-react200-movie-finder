const defaultState = {
    movieDetail: ''
};

export default function MovieDetailReducer(state = defaultState, action) {
    const { payload, type } = action;

    switch (type) {
        case 'GET_MOVIE_DETAIL_FULFILLED': {
            return {
                ...state,
                movieDetail: payload
            }
        }
        default: {
            return state
        }
    }
}