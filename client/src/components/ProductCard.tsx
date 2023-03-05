import React from "react";
import { product } from "../interface";
import { BsCartPlusFill } from "react-icons/bs";
import { formatNumberToCurrency } from "../utils";

interface props extends product {
  onAddToCart(): void;
}

const ProductCard = ({
  _id,
  name,
  description,
  image,
  price,
  onAddToCart,
}: props) => {
  return (
    <article className=" bg-white rounded-sm shadow-xl w-[80%] min-w-[230px] md:w-full block mx-auto  hover:scale-[1.02] transition-all ">
      <img
        src={image}
        alt={`image of a${image}`}
        className="w-full object-cover object-center aspect-square rounded-t-lg rounded-b-[2rem] mb-8"
      />
      <div className="">
        <h3 className=" font-semibold text-lg mb-2 -mt-2 rounded-md text-center">
          {name}
        </h3>
        <p className=" font-light mb-2 mx-8 text-center">
          {description.length >= 50
            ? `${description.slice(0, 50)}...`
            : description}
        </p>
        <p className="font-semibold mb-4 mx-8 text-center">
          {formatNumberToCurrency.format(price)}
        </p>
        <button
          className=" bg-blue-500 text-white border-none outline-none rounded-b-sm py-4 px-4 flex items-center justify-center w-full hover:opacity-80"
          onClick={onAddToCart}
        >
          <BsCartPlusFill />
          <span className="ml-2 text-xs uppercase">Add to cart</span>
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
