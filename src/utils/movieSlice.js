import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        onAirTVseries: null,
        trendingMovies: null,
        trendingSeries: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addOnAirTVseries: (state, action) => {
            state.onAirTVseries = action.payload;
        },
        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload;
        },
        addTrendingSeries: (state, action) => {
            state.trendingSeries = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        }
    },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addOnAirTVseries, addTrendingMovies, addTrendingSeries } = movieSlice.actions;

export default movieSlice.reducer;