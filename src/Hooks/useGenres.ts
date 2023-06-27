import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../Services/api-client";
import APIClient from "../Services/api-client";
import genres from "../Data/genres";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre{
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: {count: genres.length, results: genres}
});
export default useGenres