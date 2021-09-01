import React from 'react'
import { Image } from './Thumb.styles'
import { Link } from 'react-router-dom'
import PropsTypes from 'prop-types'

const Thumb = ({ image, movieid, clickable ,bottomBorderNone }) => {
    const key = process.env.REACT_APP_API_KEY
    const encrypt = require('simple-encryptor')(key)
    const encrypted = encrypt.encrypt(movieid)
    const movieEnc = encrypted.toString()
    const final = movieEnc.replaceAll('/','%nk%')
    

    return (
        <div>
            {clickable ?
                <Link to={`/Movie/${final}`} >
                    <Image src={image} alt='movie-image' clickable={clickable} bottomR={ bottomBorderNone}/>
                </Link> :
                       <Image src={image} alt='movie-image' bottomR={ bottomBorderNone}/>}
        </div>  
        
    )
}

Thumb.propTypes = {
    image: PropsTypes.string,
    movieid: PropsTypes.number,
    clickable:PropsTypes.bool   
}
export default Thumb
