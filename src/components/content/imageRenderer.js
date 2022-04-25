const ImageRenderer = (props) => {
  console.log(props.src);
  console.log("here");
  return <img {...props} style={{ height: "1000px" }} />;
};

export default ImageRenderer;
