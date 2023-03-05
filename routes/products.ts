import { Router } from "express";
import * as productsController from "../controllers/products";

const productRoute = Router();

//  get all products
productRoute.get("/", productsController.getProducts);

// create new product
productRoute.post("/", productsController.createProduct);

// delete product
productRoute.delete("/:productId", productsController.deleteProduct)

export default productRoute;
