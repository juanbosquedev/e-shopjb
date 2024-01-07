"use client";


import { CartProductType } from "../product/[productid]/productDetails";
import { formatPrice } from "@/utils/formatPrice";
import Link from "next/link";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";

interface ItemContentProps {
  item: CartProductType;
}

const ItemContent: React.FC<ItemContentProps> = ({ item }) => {
  return (
    <div
      className="grid
    grid-cols-5
    text-xs
    md:text-sm
    gap-4
    items-center"
    >
      <div
        className="col-span-2
        justify-self-start
        flex
        gap-2
        md:gap-4"
      >
        <Link href={`/product/${item.id}`}>
          <div className="relative w-[70px] aspect-square"><Image src={item.selectedImg.color} alt={item.name} fill className="object-contain"></Image></div>
        </Link>
        <div className="flex flex-col justify-between">
          <Link href={`/product/${item.id}`}>{truncateText(item.name)}</Link>
          <div>{item.selectedImg.color}</div>
          <div className="w-[70px]">
            <button className="text-slate-500 underline" onClick={() => {}}>
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="justify-self-center">{formatPrice(item.price)}</div>
      <div className="justify-self-center"></div>
      <div className="justify-self-end font-semibold"></div>
    </div>
  );
};

export default ItemContent;
