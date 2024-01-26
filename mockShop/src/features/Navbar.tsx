import { Link } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/">
          <h3 className="title">Mock Shop</h3>
        </Link>
      </li>
      <li>
        <Link to="/shoes">Shoes</Link>
      </li>
      {/* <li>
        <Link to="/sale">Sale</Link>
      </li> */}
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      {sessionStorage.getItem("isAdmin") && (
        <li>
          <Link to="/admin" className="admin">
            Administration
          </Link>
        </li>
      )}
    </ul>
  );
}
