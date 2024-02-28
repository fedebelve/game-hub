import useData from "./useData";
import { Genre } from "./useGenre";
import { GameQuery } from "../App";

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


const useGames = (gameQuery : GameQuery) => useData<Game>('/games', 
{params: {
    genres: gameQuery.genre?.id, 
    parent_platforms: gameQuery.platform?.id
}
}, [gameQuery])

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