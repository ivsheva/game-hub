import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../../Hooks/useGames";
import GameCard from "../GameCard/GameCard";
import GameCardContainer from "../GameCardContainer/GameCardContainer";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount = data?.pages.reduce(
    (total, page) => total + page.results.length,
    0
  ); // Counting games count, 0 - default value

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount || 0}
      next={fetchNextPage}
      hasMore={Boolean(hasNextPage)}
      loader={<Spinner />}
      endMessage={<Text>No more games to load.</Text>}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game, index) => (
              <GameCardContainer key={index}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
