import axios from 'axios';

export const getMovies = category => dispatch => {
    axios
        .get(
            `https://api.themoviedb.org/3/movie/${category}?api_key=ec58ff1c83b81d00c3c358bf5f546f7b`
        )
        .then(res => dispatch({ type: 'GET_MOVIES', payload: res.data }));
};

export const getMovie = id => async dispatch => {
    await axios
        .get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=ec58ff1c83b81d00c3c358bf5f546f7b`
        )
        .then(res => dispatch({ type: 'GET_MOVIE', payload: res.data }));
};
export const setLoading = () => {
    return {
        type: 'LOADING',
    };
};
export const getRecommended = id => dispatch => {
    axios
        .get(
            `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=ec58ff1c83b81d00c3c358bf5f546f7b`
        )
        .then(res => dispatch({ type: 'GET_RECOMMENDED', payload: res.data }));
};

export const addWatchList = movie => {
    return {
        type: 'ADD_WATCHLIST',
        payload: movie,
    };
};

export const deleteWatchList = id => {
    return {
        type: 'DELETE_FROM_WATCHLIST',
        payload: id,
    };
};

export const addWishList = movie => {
    return {
        type: 'ADD_WISHLIST',
        payload: movie,
    };
};

export const deleteWishList = id => {
    return {
        type: 'DELETE_FROM_WISHLIST',
        payload: id,
    };
};
