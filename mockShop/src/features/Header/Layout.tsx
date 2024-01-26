import { Outlet, Link } from "react-router-dom";
import "./css/Layout.css";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/shoes">Products</Link>
          </li>
          <li>
            <Link to="/admin" className="admin">
              Administration
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
