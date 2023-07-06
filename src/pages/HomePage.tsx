import { Box } from "@chakra-ui/layout";
import { Grid, Show, GridItem, Flex } from "@chakra-ui/react";
import GameGrid from "../Components/GameGrid/GameGrid";
import GameHeading from "../Components/GameHeading/GameHeading";
import GenreList from "../Components/GenreList/GenreList";
import PlatformSelector from "../Components/PlatformSelector/PlatformSelector";
import SortSelector from "../Components/SortSelector/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`, //1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={9}>
          <GameHeading />
          <Flex>
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
