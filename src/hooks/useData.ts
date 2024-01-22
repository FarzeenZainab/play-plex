// Generic hook to fetch data from the server

import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

// <T> defines a generic type parameter
const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [errorMessages, setErrorMessages] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    // here we have to define the interface of the response
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
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

  return { data, errorMessages, isLoading };
};

export default useData;
