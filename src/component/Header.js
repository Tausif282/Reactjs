import { useState } from "react";
import Logo from "../assets/img/food2.png";
import { Link } from "react-router-dom";
import useOnline from "./../utils/useOnline";
const Title = () => {
  return (
    <Link to="/">
      <img className="logo" src={Logo} alt="logo" />
    </Link>
  );
};

const Header = () => {
  const [isloggedin, setLoggedin] = useState(false);

  const isOnline = useOnline();

  return (
    <div className="heading">
      <Title />
      <div className="nav-link">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      <div style={{ marginTop: "25px" }}>{isOnline ? "✅" : "❌"}</div>
      {isloggedin ? (
        <button onClick={() => setLoggedin(false)}>Logout</button>
      ) : (
        <button onClick={() => setLoggedin(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
