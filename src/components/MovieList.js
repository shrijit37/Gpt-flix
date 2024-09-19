import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    //early return
    if (movies === null) return;

    return (
        <div className='px-8'>
            <h1 className='text-lg md:text-xl font-bold text-white py-4 '>{title}</h1>
            <div className='flex overflow-x-scroll scroll-auto no-scrollbar'>
                <div className='flex'>
                    {movies?.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieList;