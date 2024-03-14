import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestions from './GptMoviesSuggestions'
import { BG_URL } from '../Utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img 
        src = {BG_URL}
        alt="background"
        />
       </div>
      <GptSearchBar/>
      <GptMoviesSuggestions/>

    </div>
  )
}

export default GptSearch
