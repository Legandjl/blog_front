import { useEffect, useRef, useState } from "react";
import Comment from "../comment/Comment";
import CommentSubmit from "../commentSubmit/CommentSubmit";
import CommentsLoader from "../loaders/CommentsLoader";
import { Link } from "react-scroll/modules";
import "./commentSection.css";
import { Events } from "react-scroll/modules";
import { scrollSpy } from "react-scroll/modules";
import { animateScroll } from "react-scroll/modules";

const CommentSection = (props) => {
  const [commentSubmitted, setCommentSubmitted] = useState(false);

  const comments = props.comments.map((commemt) => {
    return <Comment comment={commemt} />;
  });
  useEffect(() => {
    if (commentSubmitted) {
      animateScroll.scrollToBottom();
    }
  }, [commentSubmitted, props.comments, props.end]);

  const refreshComments = () => {
    props.refresh();
    setCommentSubmitted(true);
  };

  return (
    <div className={"commentSection"}>
      {comments}
      {!props.endOfComments ? (
        <button className="loadMore" onClick={refreshComments}>
          load more
        </button>
      ) : (
        <p>End of comments</p>
      )}
      {props.loading && <CommentsLoader />}
      {!props.loading && <CommentSubmit refresh={refreshComments} />}
    </div>
  );
};

export default CommentSection;
