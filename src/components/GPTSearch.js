import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BG_IMG_URL } from '../utils/constants'

const GPTSearch = () => {
    return (
        <>
            <div className='fixed brightness-50 -z-10'>
                <img
                    className='h-screen object-cover md:h-auto'
                    alt='background_image'
                    src={BG_IMG_URL}
                />
            </div>
            <div>
                <GPTSearchBar />
                <GPTMovieSuggestions />
            </div>
        </>
    );
};

export default GPTSearch