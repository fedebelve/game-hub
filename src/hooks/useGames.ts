import useData from "./useData";
import { Genre } from "./useGenre";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game{
    id: number,
    name: string,
    background_image: string,
    parent_platforms: {platform: Platform}[],
    metacritic: number;
}


const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useData<Game>('/games', 
{params: {
    genres: selectedGenre?.id, 
    parent_platforms: selectedPlatform?.id
}
}, [selectedGenre?.id, selectedPlatform?.id])

// const useGames = () => {
//     const [games, setGames] = useState<Game[]>([])
//     const [error, setError] = useState("")
//     const [isLoading, setLoading] = useState(false)
  
//     useEffect(() => {
//       const controller = new AbortController();
//       setLoading(true)
//       apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal })
//       .then(res => {
//         setGames(res.data.results)
//         setLoading(false) //Esto hay que ponerlo en el .finally()
//         })
//       .catch(err => {
//         if (err instanceof CanceledError) return;
//         setError(err.message)
        
//         }   
//         )
//       return () => controller.abort()
//     }, [])

//     return { games, error, isLoading }
// }

export default useGames