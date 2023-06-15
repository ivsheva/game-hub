import React from "react";
import { Game } from "../../Hooks/useGames";
import { Card, CardBody, Image, Heading } from "@chakra-ui/react";

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
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCard;
