import { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import useLoadData from "../../hooks/useHomeLoader";
import HomeLoader from "../loaders/HomeLoader";

import { animateScroll } from "react-scroll/modules";

import PostLink from "../post_link/PostLink";
import "./home.css";

const Home = () => {
  const [toSkip, setToSkip] = useState(0);
  const [loading, data, refresh] = useLoadData(`/blog/${toSkip}`);
  const [fetchData, fetching] = useFetchData();
  const [showButton, setShowButton] = useState(true);

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
      {showButton ? (
        <button
          onClick={() => {
            setToSkip((prev) => {
              return prev + 10;
            });
            refresh();
            animateScroll.scrollToBottom();
          }}
          className="homeButton"
        >
          More
        </button>
      ) : (
        <p
          className="postEnd"
          style={{ justifySelf: "center", gridColumn: "1/-1" }}
        >
          No more posts to show
        </p>
      )}
    </div>
  );
};

export default Home;
