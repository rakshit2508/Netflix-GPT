import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    
const movies = useSelector(store => store.movies?.nowPlayingMovies)

// One movie to display in background
if(!movies) return; // Early return 
//- coz initial state before api load its value is null and we taking first element out of null
const mainMovie = movies[0]; 


// check what data we are getting and extract accordingly

const {original_title , overview, id} = mainMovie;

return (
    <div>
     <VideoTitle title = {original_title} overview ={overview}/>
     <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer;
