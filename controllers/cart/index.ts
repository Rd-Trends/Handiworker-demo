import { Request, Response } from "express";
import Cart from "../../models/cart";

export const getCart = async (req: Request, res: Response) => {
  try {
    const cartItems = await Cart.find().populate("productId");
    return res.status(200).json(cartItems);
  } catch (err) {
    throw err;
  }
};

export const addToCart = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const itemExistInCart = await Cart.findOne({ productId });
    if (itemExistInCart) {
      const updateCartItem = await Cart.findOneAndUpdate(
        { productId },
        { quantity: (itemExistInCart.quantity += 1) },
        { new: true }
      );
      return res.status(200).json(updateCartItem);
    }
    const newCartItem = await Cart.create({ productId });
    await newCartItem.save();
    await newCartItem.populate("productId");

    return res.status(201).json(newCartItem);
  } catch (err) {
    throw err;
  }
};

export const deleteCartItem = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    await Cart.deleteOne({ productId });
    return res
      .status(200)
      .send(`cart item with id: ${productId} was deleted successfully`);
  } catch (err) {
    throw err;
  }
};
