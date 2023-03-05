import React from "react";
import { BsCartDashFill } from "react-icons/bs";
import { formatNumberToCurrency } from "../utils";

interface props {
  name: string;
  price: number;
  onRemoveFromCart(): void;
}

const CartItem = ({ name, price, onRemoveFromCart }: props) => {
  return (
    <article className=" md:flex items-center justify-between w-full mb-4">
      <div>
        <h3 className="text-base md:text-lg font-semibold mb-2">{name}</h3>
        <p className="mb-4 font-medium">
          {formatNumberToCurrency.format(price)}
        </p>
      </div>
      <button
        className=" bg-red-400 hover:opacity-80 text-white border-none outline-none rounded-md py-4 px-4 flex items-center justify-center w-full md:w-[250px]"
        onClick={onRemoveFromCart}
      >
        <BsCartDashFill />
        <span className="ml-2 text-xs uppercase">Remove from cart</span>
      </button>
    </article>
  );
};

export default CartItem;
