import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../Data/platforms";
import { Platform } from "../Entities/Platform";
import APIClient from "../Services/api-client";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");


const usePlatforms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24h
    initialData: platforms
})

export default usePlatforms;