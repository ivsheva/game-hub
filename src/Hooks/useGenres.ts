import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "./useData";
import apiClient from "../Services/api-client";
import genres from "../Data/genres";

export interface Genre{
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient
    .get<FetchResponse<Genre>>('/genres')
    .then(response => response.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: {count: genres.length, results: genres}
});
export default useGenres