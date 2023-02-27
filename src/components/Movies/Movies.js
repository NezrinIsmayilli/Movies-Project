import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMovies } from '../../store/actions';
import Movie from '../Movie/Movie';
import styles from './Movies.module.scss';
import ReactLoading from 'react-loading';
import { Layout } from 'antd';

const Movies = ({ category, title }) => {
    const movies = useSelector(state => state.movies.results);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies(category));
    });

    return (
        <Layout className={styles.movies}>
            <h1>{title} Movies</h1>
            {movies ? (
                <div className="ant-row">
                    {movies.map(movie => (
                        <div
                            key={movie.id}
                            className="ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-8 ant-col-lg-6">
                            <Movie movie={movie} category={category} />
                        </div>
                    ))}
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
        </Layout>
    );
};

export default Movies;
