import { useEffect, useRef, useState } from "react";
import Comment from "../comment/Comment";
import CommentSubmit from "../commentSubmit/CommentSubmit";
import CommentsLoader from "../loaders/CommentsLoader";
import "./commentSection.css";

const CommentSection = (props) => {
  const [commentSubmitted, setCommentSubmitted] = useState(false);
  const commentEndRef = useRef(null);

  //test

  useEffect(() => {
    if (commentSubmitted) {
      commentEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [commentSubmitted, props.comments, props.end]);

  const refreshComments = () => {
    props.refresh();
    setCommentSubmitted(true);
  };

  const handleRefresh = () => {
    console.log(comments.length);
  };

  return (
    <div className={"commentSection"}>
      {props.loading ? <CommentsLoader /> : comments}
      {!props.endOfComments ? (
        <button className="loadMore" onClick={refreshComments}>
          load more
        </button>
      ) : (
        <p>End of comments</p>
      )}
      {!props.loading && <CommentSubmit refresh={refreshComments} />}

      <div className="end" ref={commentEndRef} />
    </div>
  );
};

export default CommentSection;
