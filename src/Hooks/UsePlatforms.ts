import { useQuery } from "@tanstack/react-query";
import apiClient from "../Services/api-client";
import platforms from "../Data/platforms";
import { FetchResponse } from "../Services/api-client";

export interface Platform{
    id: number;
    name: string;
    slug: string;
};

const usePlatforms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient
    .get<FetchResponse<Platform>>('/platforms/lists/parents')
    .then(response => response.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: {count: platforms.length, results: platforms}
})

export default usePlatforms;