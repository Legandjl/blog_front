import useShowHeader from "../hooks/useShowHeader";
import "./header.css";

const Header = () => {
  const { showHeader, isTop } = useShowHeader();

  return <div className={"header"}>BLOGGER</div>;
};

export default Header;
