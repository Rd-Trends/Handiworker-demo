import { atom } from "jotai";
import { cartItem } from "./interface";

export const cartAtom = atom<cartItem[]>([]);

export const cartItemsTotalAtom = atom<number>((get) => {
  const cart = get(cartAtom);
  return cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
});
