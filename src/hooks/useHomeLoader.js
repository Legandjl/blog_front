import { useEffect, useState } from "react";

import useFetchData from "./useFetchData";

const useHomeLoader = (param) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [fetchData, fetchInProgress] = useFetchData();

  const refresh = () => {
    setLoading(true);
  };

  useEffect(() => {
    const loadData = async () => {
      const jsonData = await fetchData(param, {
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      });
      console.log(jsonData);
      setData((prev) => {
        return [...prev, ...jsonData];
      });
      setLoading(false);
    };
    if (loading && !fetchInProgress) {
      loadData();
    }
  }, [fetchData, fetchInProgress, loading, param]);

  return [loading, data, refresh];
};

export default useHomeLoader;
