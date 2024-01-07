"use client";
import Heading from "../component/products/Heading";
import { MdArrowBack } from "react-icons/md";
import { useCart } from "../hooks/useCart";
import Link from "next/link";
const CartClient = () => {
  const { cartProducts } = useCart();
  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col itmes-center">
        <div className="text-2xl">Your cart is empty</div>
        <div>
          <Link
            href="/"
            className="text-slate-500 flex items-center gap-1 mt-2"
          >
            <MdArrowBack />
            <span>Start shopping</span>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Heading title="Shopping Cart" center />
      <div className="grid grid-cols-5
      text-x5
      gap-4
      pb-2
      items-center
      mt-8">
        <div col-span-2 justify-self-start>PRODUCT</div>
        <div className="justify-self-center">PRICE</div>
        <div className="justify-self-center">QUANTITY</div>
        <div className="justify-self-end">TOTAL</div>
      </div>
      <div>{cartProducts && cartProducts.map((item)=>{
        return (
            <div key={item.id}>{item.name}</div>
        )
      })}</div>
    </div>
  );
};

export default CartClient;
