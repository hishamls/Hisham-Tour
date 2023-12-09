import { useEffect, useState } from "react";

export function useFetch(fetchFun, initialValue) {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [fetchData, setFetchData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFun();
        setFetchData(data);
      } catch (error) {
        setError({ message: error.message || "Fail to fetch data!" });
      }
      setIsFetching(false);
    }
    fetchData();
  }, [fetchFun]);

  return {
    isFetching,
    error,
    fetchData,
    setFetchData,
  };
}
