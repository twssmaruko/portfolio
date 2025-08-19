import { Link, useLocation } from "react-router-dom";
import { Menu } from "antd";

const items = [
  { key: "/", label: <Link to="/">Home</Link> },
  { key: "/projects", label: <Link to="/projects">Projects</Link> },
  { key: "/about", label: <Link to="/about">About</Link> },
  { key: "/contact", label: <Link to="/contact">Contact</Link> }
];

const NavBar = () => {
  const { pathname } = useLocation();
  return (
    <div style={{ padding: 12, boxShadow: "0 2px 8px rgba(0,0,0,.06)" }}>
      <Menu mode="horizontal" selectedKeys={[pathname]} items={items} />
    </div>
  );
};

export default NavBar;
