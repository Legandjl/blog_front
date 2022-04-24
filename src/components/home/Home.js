import useFetch from "../hooks/useFetch";
import PostLink from "../post_link/PostLink";
import "./home.css";

const Home = () => {
  const [loading, data, refresh] = useFetch("/blog");
  const posts = data.map((dataItem) => {
    return <PostLink dataItem={dataItem} />;
  });
  return <div className="homeWrap">{posts}</div>;
};

export default Home;
