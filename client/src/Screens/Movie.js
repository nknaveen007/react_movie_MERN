import React from 'react'
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'
import NoImage from '../images/no_image.jpg'
import {useParams} from 'react-router-dom'
import useMovieHooks from '../Hooks/useMovieHooks'
import BreadCrums from '../components/BredCrums'
import Spinner from '../components/Spinner'
import MovieInfo from '../components/MovieInfo'
import MovieInfoBar from '../components/MovieInfoBar'
import Grid from '../components/Grid'
import Actor from '../components/Actor'


const key = process.env.REACT_APP_API_KEY
const encryptor = require('simple-encryptor')(key)

const Movie = () => {

    const { MovieId } = useParams();
    const final = MovieId.replaceAll('%nk%','/')
    const decryptor = encryptor.decrypt(final)
    
    console.log('hello',decryptor)
    const { state, loading, error } = useMovieHooks(decryptor)
    console.log(state)
    if (loading) return <Spinner />
    if(error) return <div>Something went wrong....</div>

    return (
        <>
            <BreadCrums movieTitle={state.original_title} />
            <MovieInfo movie={state} />
            <MovieInfoBar movie={state} />
            <Grid heading='Cast' minmax={'200px'}>
                {state.credits.map((value,index) => {
                    return (
                        <Actor
                            key={value.credit_id}
                            url={value.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${value.profile_path}` : NoImage}
                            name={value.name}
                            character={value.character}
                        />
                    )
                })}
            </Grid>
        </>
    )
}

export default Movie
