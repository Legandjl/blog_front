import { useParams } from "react-router-dom";
import CommentSection from "../commentSection/CommentSection";
import useComments from "../../hooks/useComments";
import Markdown from "markdown-to-jsx";

import "./post.css";
import PostLoader from "../loaders/PostLoader";
import usePostLoader from "../../hooks/usePostLoader";

const Post = () => {
  const { id } = useParams();

  const [loading, data] = usePostLoader(`/blog/post/${id}`);
  const [loadingComments, commentData, commentRefresh, endOfComments] =
    useComments(`/blog/comments/${id}`);

  return (
    <div className={"content"}>
      <div
        className="postcontent"
        style={{
          borderBottom:
            commentData.length === 0 && "solid 1px rgba(0, 0, 0, 0.293)",
        }}
      >
        {!loading && <Markdown>{data.post.content}</Markdown>}
        {loading && <PostLoader />}
      </div>
      {!loading && (
        <CommentSection
          comments={commentData}
          loading={loadingComments}
          refresh={commentRefresh}
          endOfComments={endOfComments}
        />
      )}
    </div>
  );
};

export default Post;
