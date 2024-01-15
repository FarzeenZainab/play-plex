import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>();
  const [errorMessages, setErrorMessages] = useState();

  useEffect(() => {
    const controller = new AbortController();

    // here we have to define the interface of the response
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrorMessages(err.message);
      });

    // cancel/abort request
    return () => {
      controller.abort();
    };
  }, []);

  return { games, errorMessages };
};

export default useGames;
