import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Game from "../../Entities/Game";
import getCroppedImageUrl from "../../Services/image-url";
import CriticScore from "../CriticScore/CriticScore";
import PlatformIconList from "../PlatformIconList/PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack justifyContent={"space-between"} marginBottom={1}>
            <PlatformIconList
              platforms={game.parent_platforms.map(
                (platform) => platform.platform
              )}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize={"2xl"}>
            <Link to={`/games/${game.slug}`}>{game.name}</Link>
          </Heading>
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCard;
