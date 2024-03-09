//import useData from "./NOlongerNeedITuseData";
import { GameQuery } from "../App";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Game>('/games')

export interface Game{
    id: number,
    name: string,
    background_image: string,
    parent_platforms: {platform: Platform}[],
    metacritic: number;
    rating_top: number;
    rating: number;
}


const useGames = (gameQuery : GameQuery) => 
    useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        // queryFn: () => 
        //         apiClient.get<FetchResponse<Game>>('/games', {
        //             params: {
        //                 genres: gameQuery.genre?.id, 
        //                 parent_platforms: gameQuery.platform?.id,
        //                 ordering: gameQuery.sortOrder,
        //                 search: gameQuery.searchText
        //             }
        //         })
        //         .then(res => res.data)
        queryFn: ({ pageParam = 1}) => apiClient.getAll({
                    params: {
                        genres: gameQuery.genreId, 
                        parent_platforms: gameQuery.platformId,
                        ordering: gameQuery.sortOrder,
                        search: gameQuery.searchText,
                        page: pageParam
                    }
        }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next? allPages.length +1 : undefined
        },
        staleTime: 24 * 60 * 60 * 1000
    })

// useData<Game>('/games', 
// {params: {
//     genres: gameQuery.genre?.id, 
//     parent_platforms: gameQuery.platform?.id,
//     ordering: gameQuery.sortOrder,
//     search: gameQuery.searchText
// }
// }, [gameQuery])

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