import { useState } from "react";
import { Link } from "react-router-dom";
import { create } from "../../data/allMenu";
import Query from "../../svg/query";
import CreatePostPopup from "../createPostPopup"; // Import the CreatePostPopup component

export default function AllMenu() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup((prev) => !prev);
  };

  return (
    <div className="all_menu_wrap scrollbar">
      <div className="all_right">
        <div className="all_right_header"></div>

        {create.map((item, index) => (
          <div key={index} className="all_right_item hover1 center-icon">
            <div className="all_right_circle">
              <Link to="#" onClick={togglePopup} className="header_logo">
                <div className="circle">
                  <Query />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {showPopup && <CreatePostPopup />}{" "}
      {/* Render the CreatePostPopup component conditionally */}
    </div>
  );
}
