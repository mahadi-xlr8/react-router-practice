import { useParams } from "react-router";
export function BookList() {
  const {id} = useParams();
  return <h2>Book {id}</h2>;
}
