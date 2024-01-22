import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

// interface of the response returned from the get request
interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

// interface of a genre
interface Genre {
  id: number;
  name: string;
  slug: string;
  game_count: number;
  image_background: string;
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>();
  const [errorMessages, setErrorMessages] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    // here we have to define the interface of the response
    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrorMessages(err.message);
        setLoading(false);
      });

    // cancel/abort request
    return () => {
      controller.abort();
      setLoading(false);
    };
  }, []);

  return { genres, errorMessages, isLoading };
};

export default useGenres;
