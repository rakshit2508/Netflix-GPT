import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState :{
        // initial state is an object
        nowPlayingMovies: null,
    },
    reducers:{ // these are reducer functions which keeps actions
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
            // this state is referring to things in initial state
        },
    },
});


export const {addNowPlayingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;