import "./comment.css";

const Comment = ({ comment }) => {
  /* Comment data structure 
_id: "6261a84b9238a1c664ce00e4"​​​
content: "SOME NEW CONTENT"​​​
date: "2022-04-21T18:54:03.891Z"​​​
name: "userPost"​​​
post: "626190a793819f3305a20878"
*/
  return (
    <div className="commentWrap">
      <div className="commentName">
        {comment.name === "" ? "Anonymous" : comment.name}
      </div>
      <div className="commentContent">{comment.content}</div>
      <div className="commentDate">{comment.date}</div>
    </div>
  );
};

export default Comment;
