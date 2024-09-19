export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR = "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABRUgleswgt7gwJsXbTfUdpgyuHuLqPuwKMpsmqqC9fcFJ5xQicSiPpEHyul5okHnMnFFOBMFK1iApRLYZUKe06X421iVa0ce6mnA.png?r=1d8";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY,
    }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_IMG_URL = "https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg";

export const SUPPORTED_LANGUAGES = [{ identifier: "en", name: "English" }, { identifier: "hindi", name: "Hindi" }, { identifier: "es", name: "Spanish" }]

export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;