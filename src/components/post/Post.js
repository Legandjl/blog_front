import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import remarkGfm from "remark-gfm";
import "./post.css";
import CommentSection from "../commentSection/CommentSection";
import useComments from "../../hooks/useComments";

const Post = () => {
  const { id } = useParams();

  const [loading, data, refresh] = useFetch(`/blog/${id}`);
  const [loadingComments, commentData, commentRefresh, endOfComments] =
    useComments(`/blog/comments/${id}`);

  return (
    <div className={"content"}>
      {!loading && (
        <ReactMarkdown
          children={data.post.content}
          remarkPlugins={[remarkGfm]}
          escapeHtml={false}
        />
      )}
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
