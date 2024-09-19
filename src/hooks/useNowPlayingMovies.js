import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice';


const useNowPlayingMovies = () => {
    //Fetch data from TMDB API and add to store.
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector((store) => store.nowPlayingMovies);

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/trending/movie/day', API_OPTIONS);
        const json = await data.json()
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(() => {
        !nowPlayingMovies && getNowPlayingMovies();
    }, []);
};

export default useNowPlayingMovies;