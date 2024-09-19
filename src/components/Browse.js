import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useOnAirTVseries from '../hooks/useOnAirTVseries';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useTrendingSeries from '../hooks/useTrendingSeries';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';


const Browse = () => {
    const showGPTSearch = useSelector(store => store.gpt.showGPTSearch);

    useNowPlayingMovies();
    usePopularMovies();
    useOnAirTVseries();
    useTrendingMovies();
    useTrendingSeries();

    return (
        <div>
            <Header />
            {showGPTSearch
                ?
                (<GPTSearch />)
                :
                (<>
                    <MainContainer />
                    <SecondaryContainer />
                </>)
            }
        </div>
    )
}

export default Browse;