import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { DateTime } from "luxon";
import "./postLink.css";

const PostLink = (props) => {
  return (
    <div className="postWrap">
      <div className="postDetail">
        <ReactMarkdown children={props.dataItem.title.substring(0, 20)} />
        <Link to={`/post/${props.dataItem._id}`}>read more</Link>
        <p className="postlinkDate">
          {DateTime.fromISO(props.dataItem.date).toISODate()}
        </p>
      </div>
    </div>
  );
};

export default PostLink;
