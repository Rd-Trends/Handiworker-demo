import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./components/Layout";

const Cart = lazy(() => import("./pages/Cart"));
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <div className=" flex flex-col">
      <Toaster />
      <BrowserRouter>
        <Layout>
          <Suspense fallback="loaidng">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
