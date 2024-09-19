import React, { useEffect } from 'react'
import MultiSelectDropdown from '../utils/MultiSelectDropdown';
import { useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGPTSearchView } from '../utils/GPTSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
    const user = useSelector((store) => store.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse");
                // ...
            } else {
                // User is signed out
                // ...
                dispatch(removeUser());
                navigate("/");
            }
        });
        //unsubscribe when component unmounts
        return () => unsubscribe();
    }, []);

    const handleGPTSearchClick = () => {
        //Toggle GPT Search
        dispatch(toggleGPTSearchView());
    };

    const handleLangChange = (e) => {
        //change language
        dispatch(changeLanguage(e.target.value))
    };

    return (
        <div className='absolute w-screen px-16 pt-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between '>
            <img
                className='w-36 mx-auto md:mx-0'
                alt='logo'
                src={LOGO}
            />
            {user && (
                <div className='flex justify-between p-2'>
                    {showGPTSearch && (<select
                        className='p-2 m-2 bg-gray-900 bg-opacity-60 text-white rounded-lg'
                        onChange={handleLangChange}>
                        {SUPPORTED_LANGUAGES.map(lang =>
                            <option
                                key={lang.identifier}
                                value={lang.identifier}
                            >
                                {lang.name}
                            </option>
                        )}
                    </select>)}
                    <button
                        className='py-2 px-1 md:px-4 mx-1 md:mx-4 my-2 rounded-lg bg-opacity-60 bg-purple-800 text-white'
                        onClick={handleGPTSearchClick}
                    >
                        {showGPTSearch ? "Home" : "Gen-AI Search"}
                    </button>
                    <img
                        className='hidden md:block w-8 h-8 my-2'
                        alt='user-icon'
                        src={user?.photoURL}
                    />
                    <form className='mx-2 px-2'>
                        <MultiSelectDropdown />
                    </form>
                </div>)}
        </div>
    )
}

export default Header;