import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
        <Link to="/" className="logo">myBLOG</Link>
        <nav>
          <Link to="/login">login</Link>
          <Link to="/register">signup</Link>
        </nav>
      </header>
    );
}