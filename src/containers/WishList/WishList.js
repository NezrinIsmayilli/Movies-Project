import Movie from '../../components/Movie/Movie';
import { useSelector } from 'react-redux/es/exports';
import { useEffect } from 'react';
import styles from './WishList.module.scss';

const WishList = () => {
    const wishList = useSelector(state => state.wishList);
    useEffect(() => {
        localStorage.setItem('wishList', JSON.stringify(wishList));
    });
    return (
        <div className={styles.movies}>
            {wishList.length === 0 ? (
                <h1>Your wishList is empty!</h1>
            ) : (
                <div>
                    <h1>Your wishlist</h1>
                    <div className="ant-row">
                        {wishList.map(list => (
                            <div
                                key={list.id}
                                className="ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-8 ant-col-lg-6">
                                <Movie movie={list} category="wishlist" />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default WishList;
