import { NavLink } from "react-router-dom";
import "./Header.css";
import LoginIcon from "@mui/icons-material/Login";

const Header = () => {
  const login = <LoginIcon></LoginIcon>;
  return (
    <div id="header">
      <div className="routes">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <NavLink to="/login"> {login} </NavLink>
      </div>
    </div>
  );
};

export default Header;
