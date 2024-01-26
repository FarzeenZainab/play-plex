import { useState } from "react";

import { Genre } from "./hooks/useGenres";

import { Grid, GridItem, Show } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  // TypeScript: this variale can either hold a genre object or null
  const [selectedGenre, setSeletedGenre] = useState<Genre | null>(null);

  // The component which is holding the state should be responsible updating it.

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
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
          <GridItem area="aside" paddingX="18px">
            <GenreList
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => {
                setSeletedGenre(genre);
              }}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector />
          <GameGrid genre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
