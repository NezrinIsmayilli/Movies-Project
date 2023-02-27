import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NowPlaying from './containers/NowPlaying/NowPlaying';
import Popular from './containers/Popular/Popular';
import TopRated from './containers/TopRated/TopRated';
import Upcoming from './containers/Upcoming/Upcoming';
import Navbar from './components/Navbar/Navbar';
import MovieDetails from './containers/MovieDetails/MovieDetails';
import WatchList from './containers/WatchList/WatchList';
import WishList from './containers/WishList/WishList';
import ScrollToTop from './utils/ScrollToTop';
import { BackTop } from 'antd';
import { up } from './assets/icons/allIcons';

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<Navigate replace to="/popular" />} />
                <Route path="/now_playing" element={<NowPlaying />} />
                <Route path="/popular" element={<Popular />} />
                <Route path="/top_rated" element={<TopRated />} />
                <Route path="/upcoming" element={<Upcoming />} />
                <Route path="/:category/movie/:id" element={<MovieDetails />} />
                <Route path="/watchList" element={<WatchList />} />
                <Route path="/wishList" element={<WishList />} />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
            <ToastContainer />
            <BackTop>
                <div className='up'>
                    {up}
                </div>
            </BackTop>
        </BrowserRouter>
    );
};

export default App;
