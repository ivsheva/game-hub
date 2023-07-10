import Platform from "../Entities/Platform";
import UsePlatforms from "./UsePlatforms";

const usePlatform = (id?: number) => {
    const {data: platforms} = UsePlatforms();

    return platforms?.results.find((p: Platform) => p.id === id)
}

export default usePlatform