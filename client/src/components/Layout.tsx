import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { useAtomValue, useSetAtom } from "jotai/react";
import { cartAtom, cartItemsTotalAtom } from "../store";
import { baseURI } from "../config";

interface props {
  children: React.ReactNode;
}

const Layout = ({ children }: props) => {
  const setCart = useSetAtom(cartAtom);

  useEffect(() => {
    fetch(`${baseURI}/api/cart`)
      .then((res) => res.json())
      .then((data) => {
        setCart((cart) => data);
      })
      .catch((err) => console.log(err));
  }, []);

  const totalItemsInCart = useAtomValue(cartItemsTotalAtom);
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <nav className="flex items-center justify-between py-4 px-4 md:px-[2rem] lg:px-[7rem] border-b border-gray-200 ">
        <Link to="/" className=" font-bold text-lg">
          <span>HANDIWORKER</span>
          <span className=" text-sm text-blue-400">.shop</span>
        </Link>
        <Link to="/cart" className="relative">
          <span className=" absolute -top-1 -right-1 p-[2px] px-[4.5px] block rounded-full text-[10px] bg-blue-600 text-white">
            {!isNaN(totalItemsInCart) ? totalItemsInCart : 0}
          </span>
          <BsCart2 size={30} />
        </Link>
      </nav>
      <div className="px-4 md:px-[2rem] lg:px-[7rem]">{children}</div>
      <footer className="text-center py-4 px-4 bg-slate-700 text-white">
        &copy; Handiworker {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Layout;
