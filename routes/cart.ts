import { Router } from "express";
import * as cartController from "../controllers/cart";

const cartRoute = Router();

// get cart array
cartRoute.get("/", cartController.getCart);

// add cartitems to cart
cartRoute.post("/:productId", cartController.addToCart);

// delete cartitem from cart
cartRoute.delete("/:productId", cartController.deleteCartItem);

export default cartRoute;
