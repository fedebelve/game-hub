import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
//import useData, { FetchResponse } from "./NOlongerNeedITuseData"
import platforms from "../data/platforms";
import { FetchResponse } from "../services/api-client";
import ms from 'ms'
import { Platform } from "../entities/Platform";
const apiClient = new APIClient<Platform>('/platforms/lists/parents')

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    // queryFn: () => apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents')
    //                 .then(res=>res.data),
    queryFn: apiClient.getAll,
    //staleTime: 24 * 60 *60* 1000, // 24hs
    staleTime: ms('24m'),
    initialData: platforms //provide initialData
})


///////////////

//const usePlatforms = () => useData<Platform>('/platforms/lists/parents')

//////////////

export default usePlatforms

