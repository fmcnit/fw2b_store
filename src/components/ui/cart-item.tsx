import { CartContext, CartProduct } from "@/providers/cart";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";
import { useContext } from "react";

interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
  const { decreaseProductQuantity, increaseProductQuantity, removeProductFromCart}= useContext(CartContext)


  const handleDecreaseProductQuantity = ()=>{
    decreaseProductQuantity(product.id)
  }

  const handleIncreaseProductQuantity = () => {
    increaseProductQuantity(product.id)
  }

  const handleRemoveProductQuantity = () => {
    removeProductFromCart(product.id);
  };

  return (
    <div className="mt-2 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className=" flex h-[70px] items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            width={0}
            height={0}
            sizes="100vw"
            alt={product.name}
            className="h-auto max-h-[90%] w-auto max-w-[80%]"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-[0.4rem]">{product.name}</p>
          <div className="flex items-center gap-2">
            <p className="text-[0.8rem]">
              R${product.totalPrice.toFixed(2)}
            </p>
            {product.discountPercentage > 0 && (
              <p className="text-[0.6rem] line-through opacity-75 ">
                {Number(product.basePrice).toFixed(2)}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant={"outline"}
                className="h-4 w-4"
                onClick={handleDecreaseProductQuantity}
              
              >
                <ArrowLeftIcon size={14} />
              </Button>
              <span className=" text-xs px-2">
                {product.quantity}
              </span>
              <Button
                size="icon"
                variant={"outline"}
                className="h-4 w-4"
                onClick={handleIncreaseProductQuantity}
              >
                <ArrowRightIcon size={14} />
              </Button>
          </div>
        </div>
      </div>
      <Button  
      size={"icon"} variant={"outline"} className="w-[1.3rem] h-8" onClick={handleRemoveProductQuantity}>
        <TrashIcon size={10}/>

      </Button>
    </div>
  );
};

export default CartItem;
