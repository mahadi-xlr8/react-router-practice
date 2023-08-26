import { useOutletContext, useParams } from "react-router";

const ProductList = () => {
    const {id}=useParams()
    const obj=useOutletContext()
  return <h1>product List {id} {obj.name}</h1>;
};

export default ProductList;
