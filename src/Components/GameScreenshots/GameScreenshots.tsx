import { Heading, Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../../Hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data: screenshots, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) return null;

  if (!screenshots?.results) return null;

  return (
    <>
      {screenshots.results.length > 0 && (
        <Heading textAlign="center" padding={6}>
          Screenshots
        </Heading>
      )}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6}>
        {screenshots.results.map((screenshot) => (
          <Image src={screenshot.image} key={screenshot.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;
