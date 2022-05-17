import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <div className={"header"}>
      <Link className="headerIcon" to={"/"}>
        BLOGGER
      </Link>
    </div>
  );
};

export default Header;
