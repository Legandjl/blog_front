import useLoadData from "../../hooks/useLoadData";

import PostLink from "../post_link/PostLink";
import "./home.css";

const Home = () => {
  const [loading, data, refresh] = useLoadData("/blog/0");
  let posts;
  if (!loading) {
    posts = data.map((dataItem) => {
      return <PostLink dataItem={dataItem} />;
    });
  }
  return !loading && <div className="homeWrap">{posts}</div>;
};

export default Home;
