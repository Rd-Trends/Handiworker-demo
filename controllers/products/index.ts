import { Request, Response } from "express";
import Product from "../../models/product";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (err) {
    throw err;
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price, image } = req.body;

    if (!name || !description || !price || !image) {
      res.status(400).send("Missing field(s");
    }

    const product = await Product.create({
      name,
      description,
      price,
      image,
    });

    await product.save();

    return res.status(201).json(product);
  } catch (err) {
    throw err;
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    await Product.deleteOne({ _id: productId });
    return res.status(200).send("product deleted successfully");
  } catch (err) {
    throw err;
  }
};
