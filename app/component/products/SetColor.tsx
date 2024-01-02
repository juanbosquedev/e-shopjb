"use client";

import {
  CartProductType,
  SelectedImgType,
} from "@/app/product/[productid]/productDetails";

interface SetColorProps {
  images: SelectedImgType[];
  cartProduct: CartProductType;
  handleColorSelect: (value: SelectedImgType) => void;
}
const SetColor: React.FC<SetColorProps> = ({
  images,
  cartProduct,
  handleColorSelect,
}) => {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <span className="font-semibold">COLOR:</span>
        <div className="flex gap-1">
          {images.map( (images) => {
            return (
              <div
              key={images.color}
              onClick={()=> handleColorSelect(images)}
                
                className={`h-7 w-7 rounded-full border-teal-300
        flex items-center justify-cnter
        ${
          cartProduct.selectedImg.color === images.color
            ? "border-[1.5px]"
            : "border-none"
        }`}
              >
                <div
                  style={{ background: images.color }}
                  className="
                  h-5
            w-5
            rounded-full
            border-[1.2px]
            border-slate-300
            cursor-pointer"
                ></div>
              </div>
            );
          }
          )}
        </div>
      </div>
    </div>
  );
};

export default SetColor;
