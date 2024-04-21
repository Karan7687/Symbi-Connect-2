import { useSelector } from "react-redux";
import "./style.css";
import { Feeling, LiveVideo, Photo } from "../../svg";

export default function CreatePost() {
  const { user } = useSelector((state) => ({ ...state }));

  return (
    <div className="container">
      <div className="createPost">
        <div className="createPost_header">
          <div className="open_post hover1">Ask your Question here </div>
        </div>
        <div className="create_spiltter"></div>
        <div className="createPost_body"></div>
      </div>
    </div>
  );
}
