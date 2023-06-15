import { Game } from "../../Hooks/useGames";
import { Card, CardBody, Image, Heading, Text } from "@chakra-ui/react";
import PlatformIconList from "../PlatformIconList/PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div>
      <Card borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCard;
