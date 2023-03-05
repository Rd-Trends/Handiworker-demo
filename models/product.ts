import { model, models, Schema } from "mongoose";

interface Iproduct {
  name: String;
  description: String;
  image: String;
  price: Number;
}

const productSchema = new Schema<Iproduct>({
  name: {
    type: String,
    required: [true, "please provide a name for this product"],
  },
  description: {
    type: String,
    required: [true, "please provide a description for this product"],
  },
  image: {
    type: String,
    required: [true, "please provide a valid image URI for this product"],
  },
  price: {
    type: Number,
    required: [true, "please provide a price for this product"],
  },
});

const Product = models.Product || model<Iproduct>("Product", productSchema);

export default Product;
