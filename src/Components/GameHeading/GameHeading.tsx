import { Heading } from "@chakra-ui/react";
import useGenre from "../../Hooks/useGenre";
import usePlatform from "../../Hooks/usePlatform";
import useGameQueryStore from "../../store";

const GameHeading = () => {
  const gameQuery = useGameQueryStore((state) => state.gameQuery);
  const genre = useGenre(gameQuery.genreId);

  const platform = usePlatform(gameQuery.platformId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as={"h1"} fontSize={"5xl"} marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
