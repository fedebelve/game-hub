import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
}

const useGenres = () => useData<Genre>('/genres')

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