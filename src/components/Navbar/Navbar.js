import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';
import dblogo from '../../assets/img/dblogo.png';
import { Layout } from 'antd';
import { wish, watch } from '../../assets/icons/allIcons';
import { useSelector } from 'react-redux/es/exports';

const { Header } = Layout;

const Navbar = () => {
    const watchList = useSelector(state => state.watchList);
    const wishList = useSelector(state => state.wishList);
    return (
        <Header className={styles.header}>
            <NavLink to="/" className={styles.logo}>
                <img src={dblogo} alt="err" />
            </NavLink>

            <nav className={styles.nav}>
                <NavLink
                    to="/popular"
                    className={styles.link}
                    activeclassname="active">
                    Popular
                </NavLink>
                <NavLink
                    to="/now_playing"
                    className={styles.link}
                    activeclassname="active">
                    Now Playing
                </NavLink>
                <NavLink
                    to="/top_rated"
                    className={styles.link}
                    activeclassname="active">
                    Top Rated
                </NavLink>
                <NavLink
                    to="/upcoming"
                    className={styles.link}
                    activeclassname="active">
                    Upcoming
                </NavLink>
                <NavLink
                    to="/wishList"
                    className={styles.link}
                    activeclassname="active">
                    {wish}
                    <span className={styles.number}>{wishList.length}</span>
                </NavLink>
                <NavLink
                    to="/watchList"
                    className={styles.link}
                    activeclassname="active">
                    {watch}
                    <span className={styles.number}>{watchList.length}</span>
                </NavLink>
            </nav>
        </Header>
    );
};

export default Navbar;
