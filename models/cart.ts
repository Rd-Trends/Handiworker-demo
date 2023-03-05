import { model, models, Schema, Types } from "mongoose";

interface Icart {
  productId: Types.ObjectId;
  quantity: number;
}

const cartSchema = new Schema<Icart>({
  productId: { type: Schema.Types.ObjectId, ref: "Product" },
  quantity: { type: Number, default: 1 },
});

const Cart = models.Cart || model<Icart>("Cart", cartSchema);

export default Cart;
