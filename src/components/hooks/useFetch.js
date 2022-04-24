import { useEffect, useState } from "react";

const useFetch = (param) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const url = `http://localhost:3000${param}`;

  const refresh = () => {
    setLoading(true);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetch(url);
        if (!data.ok) {
          throw new Error("Could not fetch the resource");
        }
        const jsonData = await data.json();
        setData(jsonData);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    if (loading) {
      loadData();
    }
  }, [loading, url]);

  return [loading, data, refresh];
};

export default useFetch;
