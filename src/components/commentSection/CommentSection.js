import { useEffect, useState } from "react";
import Comment from "../comment/Comment";
import CommentSubmit from "../commentSubmit/CommentSubmit";
import CommentsLoader from "../loaders/CommentsLoader";

import "./commentSection.css";

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
        <p className="loadMore" onClick={refreshComments}>
          load more
        </p>
      ) : comments.length === 0 ? (
        <p style={{ marginTop: "5px", marginBottom: "5px" }}>
          No comments to show
        </p>
      ) : (
        <p>End of comments</p>
      )}
      {props.loading && <CommentsLoader />}
      {!props.loading && <CommentSubmit refresh={refreshComments} />}
    </div>
  );
};

export default CommentSection;
