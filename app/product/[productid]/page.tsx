import { Container } from "@/app/component/Container";
import ProductDetails from '../[productid]/productDetails'
import product from "@/utils/product";

interface IParams{
    productId?:string
}

const Product = ({params}:{params:IParams}) => {
    return <div className="p-8"><Container><ProductDetails product = {product}></ProductDetails></Container></div>;
}
 
export default Product;