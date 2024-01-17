import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  /**
   * ==============================================
  // This component is involved in making http requests. It knows about end point, it knows about the type of the request we send. This is something we don't want in our components because our components should be primarily responsible for returning markup and handling user interactions at high level.

  // here we have two options:
  // 1. Move the logic of making http request inside a service
  // 2. Move the entire state and the effect logic inside a hook. So, hooks are not necessarily for sharing functionality across multiple components. We can also use them to separate concerns & make our code more modular and reusable.

  // const [games, setGames] = useState<Game[]>();
  // const [errorMessages, setErrorMessages] = useState();

  // useEffect(() => {
  //   // here we have to define the interface of the response
  //   apiClient
  //     .get<FetchGamesResponse>("/games")
  //     .then((res) => setGames(res.data.results))
  //     .catch((err) => setErrorMessages(err.message));
  // });
  * =============================================
  */

  /**
   * ==============================================
   * let's create a custom hook for fetching games
   * =============================================
   */

  const { games, errorMessages } = useGames();

  return (
    <>
      {errorMessages && <Text>{errorMessages}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 3,
        }}
        spacing={10}
        maxWidth={1000}
        marginLeft="auto"
        marginRight="auto"
        padding={10}
      >
        {games?.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
