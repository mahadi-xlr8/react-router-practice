import { Link, Outlet } from "react-router-dom";
export function ProductLayout() {
  return (
    <>
    <Outlet context={{name:'outlet context'}}/>
      <ul>
        <li>
          <Link to="/product/1"> product 1</Link>
        </li>
        <li>
          <Link to="/product/2">pro 2</Link>
        </li>
        <li>
          <Link to="/product/3">pro 3</Link>
        </li>
        <li>
          <Link to="/Product/new">New Product</Link>
        </li>
      </ul>
      
    </>
  );
}
