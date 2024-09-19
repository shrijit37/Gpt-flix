import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies)

    return (
        movies.nowPlayingMovies && (
            <div className='bg-black'>
                <div className='mt-0 md:-mt-64 relative pl-4 md:pl-12 z-20'>
                    <MovieList title={"Trending Movies"} movies={movies.nowPlayingMovies} />
                    <MovieList title={"Popular"} movies={movies.popularMovies} />
                    <MovieList title={"Top-Rated TV series"} movies={movies.onAirTVseries} />
                    <MovieList title={"Top-Rated Movies"} movies={movies.trendingMovies} />
                    <MovieList title={"Trending in TV today"} movies={movies.trendingSeries} />

                </div>
            </div>
        )
    );
};

export default SecondaryContainer;