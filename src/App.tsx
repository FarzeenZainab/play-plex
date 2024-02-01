import { useState } from "react";

import { Genre } from "./hooks/useGenres";

import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import { Game, Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string | null;
}

function App() {
  // TypeScript: this variale can either hold a genre object or null

  // Refactor: Query params
  /**
   * Currently we have got two state variables here but, as we add more features we will
   * need even more variables for tracking things like sort order and search cases.
   *
   * Adding a bunch of variables and passing them around is ugly. It causes clutter in our code
   * and makes it stink
   *
   * We should pack related variables inside an object.
   *
   * We will use QUERY OBJECT PATTERN.
   *
   * In this pattern we will create a query object which will store all the information
   * we need to query the games
   *
   * With this our code will be cleaner and easier to understand.
   */

  // Old version of passing query params
  // const [selectedGenre, setSeletedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText: searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX="18px">
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => {
                setGameQuery({ ...gameQuery, genre });
              }}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <HStack paddingLeft={10} gap={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) => {
                setGameQuery({ ...gameQuery, sortOrder });
              }}
            />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
