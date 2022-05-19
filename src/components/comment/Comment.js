import "./comment.css";
import { DateTime } from "luxon";

const Comment = ({ comment }) => {
  return (
    <div className="commentWrap">
      <div className="commentName">
        {comment.name === "" ? "Anonymous" : comment.name}
      </div>
      <div className="commentContent">{comment.content}</div>
      <div className="commentDate">
        {DateTime.fromISO(comment.date).toLocaleString(DateTime.DATETIME_SHORT)}
      </div>
    </div>
  );
};

export default Comment;
