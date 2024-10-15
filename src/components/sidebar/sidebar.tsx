import { Link } from "react-router-dom";
import "./sidebar.css"; // Import the CSS for styling
import { FC } from "react";

export const Sidebar: FC = () => {
  return (
    <div className="sidebar">
      <h2>VWDS Tech Academy</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
