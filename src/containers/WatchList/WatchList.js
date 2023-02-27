import Movie from '../../components/Movie/Movie';
import { useSelector } from 'react-redux/es/exports';
import { useEffect } from 'react';
import styles from './WatchList.module.scss';

const WatchList = () => {
    const watchList = useSelector(state => state.watchList);
    useEffect(() => {
        localStorage.setItem('watchList', JSON.stringify(watchList));
    });

    return (
        <div className={styles.movies}>
            {watchList.length === 0 ? (
                <h1>Your watchlist is empty!</h1>
            ) : (
                <div>
                    <h1>Your watchlist</h1>
                    <div className="ant-row">
                        {watchList.map(list => (
                            <div
                                key={list.id}
                                className="ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-8 ant-col-lg-6">
                                <Movie movie={list} category="watchlist" />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default WatchList;
