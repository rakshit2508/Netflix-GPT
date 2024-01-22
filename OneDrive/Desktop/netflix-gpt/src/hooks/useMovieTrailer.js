const useMovieTrailer = () => 
{
    const dispatch = useDispatch();

     const getMovieVideos = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/976573/videos?language=en-US', API_OPTIONS);
      const json = await data.json();
      console.log(json);

      // json is giving many objects but we need only trailers
      const filterData = json.results.filter((video) => video.type === "Trailer");
      // if trailer is not present(length is zero of filter data), then take first video present there
      const trailer = filterData.length ? filterData[0] : json.results[0];
      console.log(trailer);

      dispatch(addTrailerVideo(trailer));
    
       };
       useEffect(() => {
        getMovieVideos();
       })

}

export default useMovieTrailer;