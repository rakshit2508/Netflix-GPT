import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState :{
        // initial state is an object
        nowPlayingMovies: null,
        popularMovies:null,
        trailerVideo:null,
    },
    reducers:{ // these are reducer functions which keeps actions
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
            // this state is referring to things in initial state
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
            // this state is referring to things in initial state
        },
        addTrailerVideo: (state , action) => {
            state.trailerVideo = action.payload;
        }
    },
});


export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies} = moviesSlice.actions;
export default moviesSlice.reducer;