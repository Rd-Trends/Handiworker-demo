import React from "react";
import { formatNumberToCurrency } from "../utils";

interface props {
  name: string;
  price: number;
  id: number;
  quantity: number;
  image: string;
  onRemoveFromCart(): void;
}

const CartItem = ({
  name,
  price,
  id,
  image,
  quantity,
  onRemoveFromCart,
}: props) => {
  return (
    <article className="flex items-center gap-4 justify-between w-full mb-4">
      <img
        className=" w-1/2  aspect-square md:w-[200px] object-cover object-center rounded-md"
        src={image}
        loading={id > 4 ? "lazy" : "eager"}
        alt=""
      />

      <div>
        <h3 className="text-base md:text-lg capitalize font-medium mb-2">{name}</h3>
        <p className="mb-4 font-semibold">
          {formatNumberToCurrency.format(price)} &times; {quantity}
        </p>
        <button
          className=" bg-red-400 hover:opacity-80 text-sm text-white border-none outline-none rounded-md py-3 px-4 flex items-center justify-center w-full"
          onClick={onRemoveFromCart}
        >
          Remove from cart
        </button>
      </div>
    </article>
  );
};

export default CartItem;
