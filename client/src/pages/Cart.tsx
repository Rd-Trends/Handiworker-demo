import React, { useEffect, useState } from "react";
import Cart from "../components/Cart";
import { useAtom } from "jotai";
import { cartAtom } from "../store";
import toast from "react-hot-toast";
import { baseURI } from "../config";

const CartPage = () => {
  const [cart, setCart] = useAtom(cartAtom);

  const deleteCartItemNotification = () =>
    toast.error("product deleted successfully", { duration: 2500 });

  const removeProductFromCart = async (id: string) => {
    try {
      const response = await fetch(`${baseURI}/api/cart/${id}`, {
        method: "DELETE",
      });
      if (response.status === 200) {
        setCart((cart) => {
          return cart.filter((item) => item.productId._id !== id);
        });
        deleteCartItemNotification();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="py-8">
      {cart.length ? (
        <Cart cartItems={cart} onRemoveFromCart={removeProductFromCart} />
      ) : (
        <div>
          <p className="text-center text-xl md:text-2xl">No product in Cart</p>
        </div>
      )}
    </div>
  );
};

export default CartPage;
