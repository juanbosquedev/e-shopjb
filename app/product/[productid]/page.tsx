import { Container } from "@/app/component/Container";
import ProductDetails from "../[productid]/productDetails";
import product from "@/utils/product";
import ListRating from "./ListRating";

interface IParams {
  productId?: string;
}

const Product = ({ params }: { params: IParams }) => {
  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product}></ProductDetails>
        <div className="
        flex
        fex-col
        mt-20
        gap-4">
          <div>Add Rating</div>
          <ListRating product={product}/>
        </div>
      </Container>
    </div>
  );
};

export default Product;
