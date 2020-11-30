import Link from "next/link";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand">Warehouse</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/category/shirts">
              <a className="nav-link">Shirts</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/category/jackets">
              <a className="nav-link">Jackets</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/category/accessoirs">
              <a className="nav-link">Accessoirs</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
