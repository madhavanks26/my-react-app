import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/goods">Goods</Link>
          </li>
          <li>
            <Link to="/stock">Stock</Link>
          </li>
          <li>
            <Link to="/sales">Sales</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;