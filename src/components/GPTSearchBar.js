import React, { useRef } from 'react'
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGPTMovieResult } from '../utils/GPTSlice';

const GPTSearchBar = () => {
    const prefferedLang = useSelector((store) => store.config.prefferedLang);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    const searchMovieTMDB = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&include_adult=false&language=en-US&page=1", API_OPTIONS);

        const json = await data.json();

        return json.results;
    };

    const handleGPTSearchClick = async () => {
        console.log(searchText.current.value);
        //Make API call to GPT API and get movie suggestions

        const GPTQuery = "Act as a movie recommendation service and suggest movies based on the query : " +
            searchText.current.value +
            ". only give me names of 5 movies, comma separated like the example result given ahead. Example result: Up, Deadpool, Free Guy, King Kong, Thor"

        const GPTResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: GPTQuery }],
            model: 'gpt-3.5-turbo',
        });

        if (!GPTResults.choices) {
            //error handling
        }

        console.log(GPTResults.choices?.[0]?.message?.content);

        const GPTMovies = GPTResults.choices?.[0]?.message?.content.split(",");

        const promiseArray = GPTMovies.map((movie) => searchMovieTMDB(movie));

        const TMDBResults = await Promise.all(promiseArray);

        console.log(TMDBResults);

        dispatch(addGPTMovieResult({ movieNames: GPTMovies, movieResults: TMDBResults }));
    };

    return (
        <div className=' pt-[40%] md:pt-[12%] flex justify-center'>
            <form className=' bg-black bg-opacity-80 w-full md:w-1/2 grid grid-cols-12'
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    ref={searchText}
                    className='m-4 p-4 col-span-9'
                    type='text'
                    placeholder={lang[prefferedLang].gptSearchPlaceholder}
                />
                <button
                    className='py-2 px-4 m-4 col-span-3 bg-red-800 text-white rounded-lg'
                    onClick={handleGPTSearchClick}
                >
                    {lang[prefferedLang].search}
                </button>
            </form>
        </div>
    );
};

export default GPTSearchBar;