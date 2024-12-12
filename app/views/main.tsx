import { Link } from "react-router";

export function Main() {
  return (
    <>
      <h1>main root</h1>
      <Link to="/contact" className="font-semibold">
        Contacto
      </Link>
    </>
  );
}
