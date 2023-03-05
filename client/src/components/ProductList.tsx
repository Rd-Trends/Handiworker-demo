import { useSetAtom } from "jotai";
import { product } from "../interface";
import { cartAtom } from "../store";
import ProductCard from "./ProductCard";
import toast from "react-hot-toast";
import { baseURI } from "../config";

interface props {
  products: product[];
}

const ProductList = ({ products }: props) => {
  const setCart = useSetAtom(cartAtom);

  const notify = () =>
    toast.success("Product has been added to cart successfully", { duration: 2500 });

  const addToCart = async (id: string) => {
    try {
      const response = await fetch(`${baseURI}/api/cart/${id}`, {
        method: "POST",
      });
      const data = await response.json();
      setCart((cart) => {
        const newCart = cart.map((item) => {
          if (item._id === data._id) {
            item.quantity = data.quantity;
          }
          return item;
        });
        return !cart.find((item) => item._id === data._id)
          ? [...cart, data]
          : newCart;
      });
      notify();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 lg:gap-8 place-items-center py-12">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          image={product.image}
          _id={product._id}
          name={product.name}
          price={product.price}
          description={product.description}
          onAddToCart={() => addToCart(product._id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
