"use client";
import Heading from "../component/products/Heading";
import { MdArrowBack } from "react-icons/md";
import { useCart } from "../hooks/useCart";
import Link from "next/link";
import Button from "../component/Button";

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
      <div
        className="grid grid-cols-5
      text-x5
      gap-4
      pb-2
      items-center
      mt-8"
      >
        <div col-span-2 justify-self-start>
          PRODUCT
        </div>
        <div className="justify-self-center">PRICE</div>
        <div className="justify-self-center">QUANTITY</div>
        <div className="justify-self-end">TOTAL</div>
      </div>
      <div>
        {cartProducts &&
          cartProducts.map((item) => {
            return <div key={item.id}>{item.name}</div>;
          })}
      </div>
      <div
        className="border-t-[1.5px]
      border-slate-200 py-4 flex justify-between"
      >
        <div className="w-[90px]">
          <Button label="Clear Cart" onClick={() => {}} small outline />
        </div>
        <div className="text-sm flex flex-col gap-1 items-start">
          <div className="flex justify-between w-full text-base font-semibold">
            <span>Subtotal</span>
            <span>$1.000</span>
          </div>
            <p className="text-slate-500">Taxes and shipping calculate at checkout</p>
        <Button label="Checkout" onClick={()=>{}}/>
        <Link
            href="/"
            className="text-slate-500 flex items-center gap-1 mt-2"
          >
            <MdArrowBack />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartClient;
