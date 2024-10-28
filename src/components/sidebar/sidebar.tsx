import { Link } from "react-router-dom";
import "./sidebar.css"; // Import the CSS for styling
import { FC } from "react";

export const Sidebar: FC = () => {
  return (
    <div className="sidebar">
      <h2>Navigation</h2>
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

/* import { FC } from "react";
import "./sidebar.css";

interface SidebarProps {
  navigateTo: (page: string) => void;
}

export const Sidebar: FC<SidebarProps> = ({ navigateTo }) => {
  return (
    <div className="sidebar">
      <h2>React Routing</h2>
      <nav>
        <ul>
          <li>
            <button onClick={() => navigateTo("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => navigateTo("about")}>About</button>
          </li>
          <li>
            <button onClick={() => navigateTo("products")}>Products</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}; */
