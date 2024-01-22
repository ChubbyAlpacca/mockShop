import "./Navbar.css";

export function Navbar() {
  return (
    <ul>
      <li>
        <a>
          <h3 className="title">Mock Shop</h3>
        </a>
      </li>
      <li>
        <a href="/shoes">Shoes</a>
      </li>
      <li>
        <a>Sale</a>
      </li>
      <li>
        <a>Blog</a>
      </li>
    </ul>
  );
}
