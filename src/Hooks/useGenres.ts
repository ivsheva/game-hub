import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../Data/genres";
import Genre from "../Entities/Genre";
import APIClient from "../Services/api-client";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24 h"), //24h
    initialData: genres
});
export default useGenres