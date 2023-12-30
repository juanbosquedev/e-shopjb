"use client";

import { Rating } from "@mui/material";
import { productRatings } from "@/utils/productRatings";
interface ProductDetailsProps {
  product: any;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const Ratings = productRatings(product)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12:">
      <div>
        {/* <Images></Images> */}Images
      </div>
      <div>
        <h2 className="text-3xl font-medium text-slate-700">
            <div><Rating value={Ratings} readOnly></Rating></div>
        </h2>
      </div>
    </div>
  );
};

export default ProductDetails;
