import axios from 'axios';

const instance= axios.create({
    baseURL:'https://technotoil-movie.herokuapp.com/api/',
   
})

export default instance