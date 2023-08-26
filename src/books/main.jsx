import { Link, Routes, Route, NavLink } from "react-router-dom";
import Home from "./home";
import { BookList } from "./bookList";
import { BookLayout } from "./bookLayout";
import { NewBook } from "./newBook";
import { NotFound } from "./notFound";
// import './style.css'

export function Main() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" >Home</NavLink>
          </li>
          <li>
            <NavLink to="/list">Book List</NavLink>
          </li>
          <li>
            <NavLink to="/*">Not Found</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<BookLayout />}>
          <Route index element={<h1>List of Books</h1>} />
          <Route path=":id" element={<BookList />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}
