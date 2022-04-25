import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import remarkGfm from "remark-gfm";
import "./content.css";
import ImageRenderer from "./imageRenderer";

const Content = () => {
  const { id } = useParams();

  const [loading, data, refresh] = useFetch(`/blog/${id}`);

  return (
    <div className={"content"}>
      {!loading && (
        <ReactMarkdown
          children={data.post.content}
          remarkPlugins={[remarkGfm]}
          escapeHtml={false}
          components={{
            img: ({ node, ...props }) => (
              <img style={{ border: "solid 10px black" }} {...props} /> //access and change image
            ),
          }}
        />
      )}
    </div>
  );
};

export default Content;
