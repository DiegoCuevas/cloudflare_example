import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav>
      <h1>Segunda ruta</h1>
      <ul>
        <li>
          <Link to="/" className="font-bold">Inicio</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
