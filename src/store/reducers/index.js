const initialState = {
    movies: [],
    movie: [],
    recommended: [],
    loading: false,
    watchList: localStorage.getItem('watchList')
        ? JSON.parse(localStorage.getItem('watchList'))
        : [],
    wishList: localStorage.getItem('wishList')
        ? JSON.parse(localStorage.getItem('wishList'))
        : [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MOVIES':
            return { ...state, movies: action.payload };
        case 'GET_MOVIE':
            return { ...state, movie: action.payload, loading: true };
        case 'LOADING':
            return { ...state, loading: false };
        case 'GET_RECOMMENDED':
            return { ...state, recommended: action.payload };
        case 'ADD_WATCHLIST':
            return {
                ...state,
                watchList: [action.payload, ...state.watchList],
            };
        case 'DELETE_FROM_WATCHLIST':
            return {
                ...state,
                watchList: [
                    ...state.watchList.filter(
                        movie => movie.id !== action.payload
                    ),
                ],
            };
        case 'ADD_WISHLIST':
            return { ...state, wishList: [action.payload, ...state.wishList] };
        case 'DELETE_FROM_WISHLIST':
            return {
                ...state,
                wishList: [
                    ...state.wishList.filter(
                        movie => movie.id !== action.payload
                    ),
                ],
            };
        default:
            return state;
    }
};
