import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecommended } from '../../store/actions';
import Movie from '../Movie/Movie';
import styles from './RecommendedMovies.module.scss';
import { Navigation } from 'swiper';

const RecommendedMovies = ({ id, category }) => {
    const dispatch = useDispatch();
    const recommended = useSelector(state => state.recommended.results);

    useEffect(() => {
        dispatch(getRecommended(id));
    });

    return (
        <div className={styles.recommended}>
            <h2>Recommended Movies</h2>
            <Swiper
                spaceBetween={30}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                breakpoints={{
                    350: {
                        width: 350,
                        slidesPerView: 1,
                    },
                    640: {
                        width: 640,
                        slidesPerView: 2,
                    },
                    641: {
                        width: 641,
                        slidesPerView: 2,
                    },
                }}>
                {recommended
                    ? recommended.map(r => (
                          <SwiperSlide key={r.id}>
                              <Movie category={category} movie={r} />
                          </SwiperSlide>
                      ))
                    : ' '}
            </Swiper>
        </div>
    );
};

export default RecommendedMovies;
