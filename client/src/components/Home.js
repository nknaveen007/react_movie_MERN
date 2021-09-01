import React,{useRef,useEffect} from 'react'
import {  BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'
import {useHomeHooks} from '../Hooks/useHomeHooks'
import Grid from './Grid'
import HeroImage from './HeroImage'
import Thumb from './Thumb'
import NoImage from '../images/no_image.jpg'
import Spinner from './Spinner'
import SearchBox from './SearchBar'
import Button from './Button'
import Header from './Header'
import { ThumpContainer, MovieText } from './Home.styles'
import { Navigate } from 'react-router-dom'



const Home = () => {
    
    const {state, loader,setsearchTerms,searchTerms,setloadMore} = useHomeHooks()
    const box = useRef()
    let tokenCheck =useRef()

    useEffect(() => {
        console.log(tokenCheck)
        tokenCheck.current = localStorage.getItem('token')
    }, [])

    if (!loader && tokenCheck.current === null) {
        return (
            <Navigate to='/Login'/>
        )
    }
   
    
    return (
        <div>{loader?<></>:<>
                <Header />
                {!searchTerms && state.results[0] ? <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                /> : null}
                <SearchBox box={box} setsearchTerms={setsearchTerms} />
                <Grid heading={searchTerms ? 'Search Results' : 'Popular content'} minmax={'300px'}>
                    {state.results.map((value, index) => {
                        const date = value.release_date.slice(0, 4)
                        return (
                            <ThumpContainer key={value.id}>
                                <Thumb
                           
                                    clickable
                                    image={value.backdrop_path ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${value.backdrop_path}` : NoImage}
                                    movieid={value.id}
                                    bottomBorderNone={true}
                                />
                                <MovieText>
                                    <h3>{value.title}</h3>
                                    <p>{date}</p>
                                
                                </MovieText>
                            </ThumpContainer>
                        )
                    })}
                </Grid>
                {loader && <Spinner />}
                {!loader && state.page < state.total_pages &&
                    <Button text='Load More' callback={() => setloadMore(true)} />}</>}
        </div>
        
    )
}

export default Home
