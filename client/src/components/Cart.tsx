import React, { useMemo } from "react";
import { useAtomValue } from "jotai";
import { cartItem } from "../interface";
import CartItem from "./CartItem";
import { cartItemsTotalAtom } from "../store";
import { formatNumberToCurrency } from "../utils";

interface props {
  cartItems: cartItem[];
  onRemoveFromCart(id: string): void;
}

const Cart = ({ cartItems, onRemoveFromCart }: props) => {
  const totalItemsInCart = useAtomValue(cartItemsTotalAtom);
  const totalPrice = useMemo<number>(() => {
    return cartItems.reduce((total, item) => {
      return total + item.productId.price * item.quantity;
    }, 0);
  }, [cartItems]);

  return (
    <div className=" flex flex-col gap-4 max-w-[800px] py-8 px-4 md:px-[2rem] mx-auto">
      <div className="flex justify-between border-b py-4 mb-1">
        <h1 className=" uppercase font-bold text-lg ">Order</h1>
        <p className="font-medium">Edit Cart</p>
      </div>

      {cartItems.map((item) => (
        <CartItem
          name={item.productId.name}
          price={item.productId.price}
          key={item._id}
          onRemoveFromCart={() => onRemoveFromCart(item.productId._id)}
        />
      ))}

      <div className=" border-t border-gray-200 mt-2 py-6">
        <p className="flex justify-between items-center font-semibold text-lg mb-2 ">
          <span className="pr-4">Total number of product</span>
          <span>{!isNaN(totalItemsInCart) ? totalItemsInCart : 0}</span>
        </p>
        <p className=" text-xl font-semibold flex justify-between items-center">
          <span>Total price</span>
          <span>
            {!isNaN(totalPrice)
              ? formatNumberToCurrency.format(totalPrice)
              : formatNumberToCurrency.format(0)}
          </span>
        </p>
      </div>

      <button className=" bg-blue-500 text-white border-none outline-none rounded-md py-4 px-4  hover:opacity-80">
        Checkout
      </button>
    </div>
  );
};

export default Cart;
