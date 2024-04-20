import { Link } from "react-router-dom";
import { create } from "../../data/allMenu";
import Query from "../../svg/query";

export default function AllMenu() {
  return (
    <div className="all_menu_wrap scrollbar">
      <div className="all_right">
        <div className="all_right_header"></div>

        {create.map((item, index) => (
          <div key={index} className="all_right_item hover1 center-icon">
            <div className="all_right_circle">
              {/* Include the icon here */}
              {/* <i className={item.icon}></i> */}

              <Link to="/" className="header_logo">
                <div className="circle">
                  <Query />
                  {""}
                </div>
              </Link>
            </div>
            {/* <span>{item.name}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
}
