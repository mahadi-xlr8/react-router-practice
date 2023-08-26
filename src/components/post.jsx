import { useParams } from "react-router";
export function Post() {
  const { year, month } = useParams();
  return (
    <h1>
      Year: {year} <br/>Month: {month}
    </h1>
  );
}
