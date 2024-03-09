import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T>{
    count: number;
    results: T[]
}

// export default axios.create({
//     baseURL: 'https://api.rawg.io/api/',
//     params:{
//         key: '7b2309384ba14a16b19452860b3164c7'
//     }
// })

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params:{
        key: '7b2309384ba14a16b19452860b3164c7'
    }
})

class APIClient<T>{
    endpoint: string;
    
    constructor(endpoint: string){
        this.endpoint = endpoint
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
        .get<FetchResponse<T>>(this.endpoint, config)
        .then(res => res.data)
    }
}

export default APIClient