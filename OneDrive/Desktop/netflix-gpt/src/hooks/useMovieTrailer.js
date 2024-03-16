import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../Utils/moviesSlice";
import { useEffect } from "react";
import {API_OPTIONS} from "../Utils/constants"

const useMovieTrailer = (movieId) => 
{
     const dispatch = useDispatch();

     const trailerVideo = useSelector(store => store.movies.trailerVideo);

     const getMovieVideos = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId +'/videos?language=en-US', API_OPTIONS);
      const json = await data.json();
      

      // json is giving many objects but we need only trailers
      const filterData = json.results.filter((video) => video.type === "Trailer");
      // if trailer is not present(length is zero of filter data), then take first video present there
      const trailer = filterData.length ? filterData[0] : json.results[0];
      

      dispatch(addTrailerVideo(trailer));
    
       };
       useEffect(() => {
        !trailerVideo && getMovieVideos();
       },[]);

}

export default useMovieTrailer;