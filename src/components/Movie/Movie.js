import styles from './Movie.module.scss';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cut } from '../../utils/cut';
import { toast } from 'react-toastify';
import {star,addWish,addWatch,watch,wish} from '../../assets/icons/allIcons';
import {addWatchList,deleteWatchList,addWishList,deleteWishList} from '../../store/actions';

const Movie = ({ movie, category }) => {
    useEffect(() => {
        localStorage.setItem('watchList', JSON.stringify(watchList));
        localStorage.setItem('wishList', JSON.stringify(wishList));
    });

    const dispatch = useDispatch();
    const watchList = useSelector(state => state.watchList);
    const wishList = useSelector(state => state.wishList);

    const inWatchList =
        watchList.filter(m => m.id === movie.id).length > 0 ? true : false;

    const handleClick = movie => {
        inWatchList
            ? dispatch(deleteWatchList(movie.id)) &&
              toast('Movie removed from watchlist 😢 !', {
                  position: toast.POSITION.TOP_RIGHT,
              })
            : dispatch(addWatchList(movie)) &&
              toast.success('Movie added to watchlist!', {
                  position: toast.POSITION.TOP_RIGHT,
              });
    };

    const inWishList =
        wishList.filter(m => m.id === movie.id).length > 0 ? true : false;

    const onHandleClick = movie => {
        inWishList
            ? dispatch(deleteWishList(movie.id)) &&
              toast('Movie removed from wishlist 😢 !', {
                  position: toast.POSITION.TOP_RIGHT,
              })
            : dispatch(addWishList(movie)) &&
              toast.success('Movie added to wishlist ♥ !', {
                  position: toast.POSITION.TOP_RIGHT,
              });
    };

    return (
        <div>
            {movie ? (
                <div className={styles.movieCard}>
                    <Link to={`/${category}/movie/${movie.id}`}>
                        {movie.poster_path ? (
                            <img
                                src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt="err"
                            />
                        ) : (
                            ''
                        )}
                    </Link>
                    <div className={styles.icons}>
                        <p>
                            {star} {movie.vote_average}
                        </p>
                        <p
                            className={styles.addWish}
                            onClick={() => onHandleClick(movie)}>
                            {inWishList ? wish : addWish}
                        </p>
                    </div>
                    <div className={styles.end}>
                        <p className={styles.title}>{cut(movie.title, 15)}</p>
                        <p
                            className={styles.addWatch}
                            onClick={() => handleClick(movie)}>
                            {inWatchList ? watch : addWatch}
                        </p>
                    </div>
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

export default Movie;
