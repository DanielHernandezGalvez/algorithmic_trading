import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <Link to="/">
        <button>HOME</button>
      </Link>
      <Link to="/form">
        <button>FORM</button>
      </Link>
      <hr />
    </div>
  );
};

export default NavBar;
