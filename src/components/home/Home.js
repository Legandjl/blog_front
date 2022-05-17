import { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import useLoadData from "../../hooks/useHomeLoader";
import HomeLoader from "../loaders/HomeLoader";

import PostLink from "../post_link/PostLink";
import "./home.css";

const Home = () => {
  const [toSkip, setToSkip] = useState(0);
  const [loading, data, refresh] = useLoadData(`/blog/${toSkip}`);
  const [fetchData, fetching] = useFetchData();
  const [showButton, setShowButton] = useState(true);
  console.log(toSkip);

  useEffect(() => {
    const checkTotalPosts = async () => {
      const totalPosts = await fetchData(`/blog/count?published=true`);
      setShowButton(totalPosts > 10 + toSkip);
    };
    if (loading) {
      checkTotalPosts();
    }
  }, [fetchData, loading, toSkip]);

  let posts;
  if (!loading) {
    posts = data.map((dataItem) => {
      return <PostLink dataItem={dataItem} />;
    });
  }
  return loading ? (
    <HomeLoader />
  ) : (
    <div className="homeWrap">
      {posts}
      {showButton && (
        <button
          onClick={() => {
            setToSkip((prev) => {
              return prev + 10;
            });
            refresh();
          }}
          className="homeButton"
        >
          More
        </button>
      )}
    </div>
  );
};

export default Home;
