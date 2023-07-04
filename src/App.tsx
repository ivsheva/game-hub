import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameHeading from "./Components/GameHeading/GameHeading";
import NavBar from "./Components/NavBar/NavBar";
import PlatformSelector from "./Components/PlatformSelector/PlatformSelector";
import SortSelector from "./Components/SortSelector/SortSelector";
import GenreList from "./Components/GenreList/GenreList";
import GameGrid from "./Components/GameGrid/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
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
}

export default App;
