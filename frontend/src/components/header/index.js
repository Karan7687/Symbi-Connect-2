import "./style.css";
import { Link } from "react-router-dom";
import {
  Friends,
  Gaming,
  HomeActive,
  Logo,
  Market,
  Search,
  Watch,
} from "../../svg";
import { useSelector } from "react-redux";

export default function Header() {
  const { user } = useSelector((user) => ({ ...user }));
  console.log(user);

  const color = "#65676b";
  return (
    <header>
      <div className="header_left">
        <Link to="/" className="header_logo">
          <div className="circle">
            <Logo />{" "}
          </div>
        </Link>
        <div className="search search1 ">
          <Search color={color} />
          <input
            type="text"
            placeholder="Symbi Search"
            className="hide_input"
          />
        </div>
        <div className="header_middle">
          <Link to="/" className="middle_icon active">
            <HomeActive />
          </Link>
          <Link to="/Qna" className="middle_icon hover1 ">
            <Friends color={color} />
          </Link>

          <Link to="/" className="middle_icon hover1 ">
            <Market color={color} />
          </Link>
          <Link to="/" className="middle_icon hover1 ">
            <Gaming color={color} />
          </Link>
        </div>
      </div>

      <div className="header_right">
        <Link to="/profile" className="profile_link hover1">
          <img src={user?.picture} alt="not found" />
          <span>{user?.first_name}</span>
        </Link>
      </div>
    </header>
  );
}
