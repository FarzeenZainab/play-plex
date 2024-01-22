import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = () => useData<Game>("/games");

export default useGames;

/**
 *  The `AbortController` is a web API that provides a way to abort one or more DOM requests as and when needed.
 *  It is particularly useful in scenarios like canceling or aborting asynchrounous operations
 */
