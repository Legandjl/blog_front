import { useEffect, useState } from "react";

import useFetchData from "./useFetchData";

const useComments = (param) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [endOfComments, setEndOfComments] = useState(false);

  const url = `${param}/${data.length}`;
  const [fetchData, fetchInProgress] = useFetchData();

  const refresh = () => {
    setLoading(true);
  };

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData(url, {});
      setData((prev) => {
        return [...prev, ...data];
      });
      if (data.length < 5) {
        setEndOfComments(true);
      } else {
        setEndOfComments(false);
      }
      setLoading(false);
    };
    if (loading && !fetchInProgress) {
      loadData();
    }
  }, [fetchData, fetchInProgress, loading, url]);

  return [loading, data, refresh, endOfComments];
};

export default useComments;
