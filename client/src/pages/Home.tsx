import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { baseURI } from "../config";
import { product } from "../interface";

const Home = () => {
  const [products, setProducts] = useState<product[]>([]);

  useEffect(() => {
    fetch(`${baseURI}/api/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="my-8 flex flex-col min-h-screen items-start md:items-center ">
        <h1 className=" font-medium text-2xl w-full md:text-5xl md:text-center md:max-w-[700px] mt">
          Shop the most awesome products in our online store
        </h1>
        <p className=" text-lg md:text-xl mt-4">
          Excellent prices for all products, seamless checkout with fast
          delivery!
        </p>
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default Home;
