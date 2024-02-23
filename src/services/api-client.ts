import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params:{
        key: '7b2309384ba14a16b19452860b3164c7'
    }
})