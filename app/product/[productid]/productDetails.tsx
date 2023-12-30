"use client";

import { Rating } from "@mui/material";
import { productRatings } from "@/utils/productRatings";
import Horizontal from "@/utils/horizontal";
interface ProductDetailsProps {
  product: any;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const Ratings = productRatings(product);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>{/* <Images></Images> */}Images</div>
      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        
        <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
        
        <div className="flex items-center gap-2">
          <Rating value={Ratings} readOnly></Rating>
          <div>{product.reviews.length} reviews</div>
        </div>
        <Horizontal/>
<div className="text-justify">
    {product.description}
</div>
      </div>
    </div>
  );
};

export default ProductDetails;
