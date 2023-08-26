import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";
import './style.css'

export function BookLayout() {
  
  return (
    <>
      <Outlet />
      <ul>
        <li>
          <NavLink to="/list/1">Book 1</NavLink>
        </li>
        <li>
          <NavLink to="/list/2">Book 2</NavLink>
        </li>
        <li>
          <NavLink to="/list/new">New Book</NavLink>
        </li>
      </ul>
    </>
  );
}
