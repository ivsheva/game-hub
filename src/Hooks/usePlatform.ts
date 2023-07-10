import Platform from "../Entities/Platform";
import UsePlatforms from "./UsePlatforms";

const UsePlatform = (id?: number) => {
    const {data: platforms} = UsePlatforms();

    return platforms?.results.find((p: Platform) => p.id === id)
}

export default UsePlatform