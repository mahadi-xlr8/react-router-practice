import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nev from "./components/nev";
import Home from "./components/home";
import About from "./components/about";
import Product from "./components/product";
import NotFound from "./components/notFound";
import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import ProductList from "./components/products";

import NewProduct from "./components/newProduct";
import { ProductLayout } from "./components/productLayout";
import { Post } from './components/post';

function App() {
  return (
    <div>
      <Nev></Nev>
      <div className="container">
        <Routes>
          <Route path="/*" element={<NotFound />} />

          <Route path="/product" element={<ProductLayout />}>
            <Route index element={<Product />} />
            <Route path=":id" element={<ProductList />} />
            <Route path="new" element={<NewProduct />} />
          </Route>

          {/* <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductList />} />
          <Route path="/product/new" element={<NewProduct/>}/> */}
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home Name="mahadi" />} />
          <Route path="/post/:year?/:month?" element={<Post/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
