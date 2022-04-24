import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import "./postLink.css";

const PostLink = (props) => {
  console.log(props.dataItem._id);
  return (
    <div className="postWrap">
      <div className="imagePlaceholder">IMAGE HERE</div>
      <div className="postFooter">
        <ReactMarkdown children={props.dataItem.title.substring(0, 20)} />
        <Link to={`/post/${props.dataItem._id}`}>read more</Link>
      </div>
    </div>
  );
};

export default PostLink;
