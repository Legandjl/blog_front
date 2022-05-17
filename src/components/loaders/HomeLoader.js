import { SpinnerRound } from "spinners-react";
import "./loaders.css";

const HomeLoader = () => {
  return (
    <div className="homeLoader">
      <SpinnerRound color={"#292929"} />
    </div>
  );
};

export default HomeLoader;
