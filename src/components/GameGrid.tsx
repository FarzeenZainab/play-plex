import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

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
      <ul>
        {games?.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
