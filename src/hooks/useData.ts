// Generic hook to fetch data from the server

import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

// <T> defines a generic type parameter
//  requestConfig is optional so we do not have to always pass it
//  If we make a parameters optional all the paramters after should also be optional
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [errorMessages, setErrorMessages] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      // here we have to define the interface of the response
      apiClient
        .get<FetchResponse<T>>(
          endpoint,

          // axios request config object. In this object we can send data in the request body.
          // We can also send query string parameters and so on.
          { signal: controller.signal, ...requestConfig }
        )
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
    },
    deps ? [...deps] : []
  );

  return { data, errorMessages, isLoading };
};

export default useData;
