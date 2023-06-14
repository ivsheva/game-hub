import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar/NavBar";
import GameGrid from "./Components/GameGrid/GameGrid";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //1024px
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">ASIDE</GridItem>
      </Show>

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
