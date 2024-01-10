import { createContext, useState, useContext, useCallback, useEffect } from "react";
import { CartProductType } from "../product/[productid]/productDetails";
import {toast} from 'react-hot-toast'
type CartContextType = {
  cartTotalQty: number;
  cartProducts:CartProductType[]|null;
  handleAddProductToCart:(product:CartProductType)=>void;
  handleRemoveProductFromCart:(product:CartProductType)=>void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}
export const CartContextProvider = (props: Props) => {

  const [cartTotalQty, setCartTotalQty] = useState(0);

  const [cartProducts, setCartProducts]=useState<CartProductType[]|null>(null);

useEffect(()=>{
  const cartItems:any = localStorage.getItem('eShopCartItems')
  const cProducts:CartProductType[] | null= JSON.parse(cartItems)
  setCartProducts(cProducts) 
},[])

  const handleAddProductToCart=useCallback((product:CartProductType)=>{
    
    setCartProducts((prev)=>{
        let updatedCart;
        if(prev){
            updatedCart=[...prev, product]
        } else{
            updatedCart  = [product]
        }
        console.log(updatedCart, "updatecard")
        toast.success('Product added to cart')
        localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart))

        return updatedCart;
    })
  },[])

  const handleRemoveProductFromCart = useCallback((product: CartProductType)=>{
  
    if(cartProducts){
      const fiteredProducts = cartProducts.filter(item=> item.id !== product.id)
      setCartProducts(fiteredProducts)
      toast.success("Product Removed")
      localStorage.setItem("eShopCartItems", JSON.stringify(fiteredProducts))
    }
  },[cartProducts])
  
  const value = {
    cartTotalQty,
    cartProducts,
    handleAddProductToCart,
    handleRemoveProductFromCart
  };
  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCArt must be used within a CartContextProvider");
  }
  return context;
};
