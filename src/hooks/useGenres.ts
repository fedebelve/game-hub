import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import { FetchResponse } from "../services/api-client";
import APIClient from "../services/api-client";
import ms from 'ms';
// import useData from "./useData";
// import genres from "../data/genres";

const apiClient = new APIClient<Genre>('/genres')

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}


const useGenres = () => useQuery({
    queryKey: ['genres'],
    // queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres')
    //                 .then(res=>res.data),
    queryFn: apiClient.getAll,
    //staleTime: 24 * 60 *60* 1000, // 24hs
    staleTime: ms('24h'),
    //initialData: {count: genres.length, results: genres, next: null} //provide initialData
    initialData: genres
})

//////////////////////////

//const useGenres = () => ({data: genres, isLoading: false, error: null})

///////////////////////////

//useData<Genre>('/genres')

// no es más necesario
// interface FetchGenresResponse{
//     count: number;
//     results: Genre[]
// }

// const useGenres = () => {
//     const [genres, setGenres] = useState<Genre[]>([])
//     const [error, setError] = useState("")
//     const [isLoading, setLoading] = useState(false)
  
//     useEffect(() => {
//         console.log("AAAA")
//       const controller = new AbortController();
//       setLoading(true)
//       apiClient.get<FetchGenresResponse>('/genres', { signal: controller.signal })
//       .then(res => {
//         setGenres(res.data.results)
//         setLoading(false) //Esto hay que ponerlo en el .finally()
//         })
//       .catch(err => {
//         if (err instanceof CanceledError) return;
//         setError(err.message)
        
//         }   
//         )
//       return () => controller.abort()
//     }, [])

//     return { genres, error, isLoading }
// }

//porque lo implemento como generíco


export default useGenres