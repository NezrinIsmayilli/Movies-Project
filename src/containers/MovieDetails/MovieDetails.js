import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getMovie, setLoading } from '../../store/actions';
import { Link } from 'react-router-dom';
import styles from './MovieDetails.module.scss';
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';
import RecommendedMovies from '../../components/RecommendedMovies/RecommendedMovies';
import {star,addWatch,addWish,watch,wish} from '../../assets/icons/allIcons';
import {deleteWatchList,addWatchList,deleteWishList,addWishList,} from '../../store/actions';


const MovieDetails = () => {
    const movie = useSelector(state => state.movie);
    const watchList = useSelector(state => state.watchList);
    const wishList = useSelector(state => state.wishList);
    const loading = useSelector(state => state.loading);
    const dispatch = useDispatch();
    const params = useParams();
    const id = params.id;
    const location = useLocation();
    const pathname = location.pathname;
    const category = pathname.substring(
        1,
        pathname.indexOf('/', pathname.indexOf('/') + 1)
    );

    useEffect(() => {
        localStorage.setItem('watchList', JSON.stringify(watchList));
        localStorage.setItem('wishList', JSON.stringify(wishList));
    });

    useEffect(() => {
        dispatch(setLoading());
        dispatch(getMovie(id));
    }, [id, dispatch]);

    const inWatchList = 
      watchList.filter(m => m.id === movie.id).length > 0 ? true : false;

    const handleClick = movie => {
        inWatchList
            ? dispatch(deleteWatchList(movie.id)) &&
              toast('Movie removed from watchlist 😢 !', {
                  position: toast.POSITION.TOP_RIGHT,
              })
            : dispatch(addWatchList(movie)) &&
              toast.success('Movie added to watchlist ♥ !', {
                  position: toast.POSITION.TOP_RIGHT,
              });
    };

    const inWishList =
        wishList.filter(m => m.id === movie.id).length > 0 ? true : false;

    const OnHandleClick = movie => {
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
                <div className={styles.detailspage}>
                    {loading ? (
                        <div className={styles.details}>
                            <div className={styles.head}>
                                <div className={styles.img}>
                                    {movie.backdrop_path ? (
                                        <img
                                            src={`http://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                            alt="err"
                                        />
                                    ) : (
                                        ''
                                    )}
                                </div>
                                <div className={styles.extra}>
                                    <p className={styles.text1}>
                                        {' '}
                                        <Link
                                            to={`/${category}`}
                                            className={styles.link}>
                                            <span>{category}</span> movies{' '}
                                        </Link>
                                        / {movie.title}
                                    </p>
                                    <h2 className={styles.text2}>
                                        {movie.title}
                                    </h2>
                                </div>
                            </div>
                            <div
                                className={`${styles.movie} ant-row ant-row-center`}>
                                <div
                                    className={`ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-10`}>
                                    {movie.poster_path ? (
                                        <img
                                            className={styles.img}
                                            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                            alt="err"
                                        />
                                    ) : (
                                        ''
                                    )}
                                </div>
                                <div
                                    className={`${styles.info} ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-11 ant-col-lg-push-1`}>
                                    <h2>{movie.tagline}</h2>
                                    <p>{movie.overview}</p>
                                    <div className={styles.icons}>
                                        <p className={styles.icon}>
                                            {star} {movie.vote_average} (
                                            {movie.vote_count} vote)
                                        </p>
                                        <p
                                            className={styles.icon}
                                            onClick={() =>
                                                OnHandleClick(movie)
                                            }>
                                            {inWishList ? wish : addWish}
                                        </p>
                                        <p
                                            className={styles.icon}
                                            onClick={() => handleClick(movie)}>
                                            {inWatchList ? watch : addWatch}
                                        </p>
                                    </div>
                                    <ul>
                                        <li>
                                            <p>Production Companies:</p>
                                            <h3>
                                                {movie.production_companies
                                                    ? movie.production_companies.map(
                                                          (m, index) => (
                                                              <span key={index}>
                                                                  {(index
                                                                      ? ','
                                                                      : '') +
                                                                      m.name}
                                                              </span>
                                                          )
                                                      )
                                                    : ''}
                                            </h3>
                                        </li>
                                        <li>
                                            <p>Release Date:</p>

                                            <h3>{movie.release_date}</h3>
                                        </li>
                                        <li>
                                            <p>Run time:</p>

                                            <h3>{movie.runtime} min</h3>
                                        </li>
                                        <li>
                                            <p>Genres:</p>
                                            <h3>
                                                {movie.genres
                                                    ? movie.genres.map(
                                                          (m, index) => (
                                                              <span key={index}>
                                                                  {(index
                                                                      ? ','
                                                                      : '') +
                                                                      m.name}{' '}
                                                              </span>
                                                          )
                                                      )
                                                    : ''}
                                            </h3>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}

                    <RecommendedMovies id={id} category={category} />
                </div>
            ) : (
                <div className="loading">
                    <ReactLoading
                        type={'bubbles'}
                        color={'white'}
                        height={'10%'}
                        width={'10%'}
                    />
                </div>
            )}
        </div>
    );
};

export default MovieDetails;
