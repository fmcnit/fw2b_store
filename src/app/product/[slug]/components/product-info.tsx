"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductWithTotalPrice } from "@/helpers/products";
import { CartContext } from "@/providers/cart";
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useContext, useState } from "react";

interface ProductInfoProps{
    product: ProductWithTotalPrice
}

const ProductInfo = ({product}: ProductInfoProps) => {

  const [quantity, setQuantity] = useState(1)

  const { addProductToCart } = useContext(CartContext)

  const handleDecreaseQuantifyClick = ()=>{
    setQuantity((prev)=>(prev === 1 ? prev : prev -1))
  }

  const handleIncreaseQuantifyClick = () => {
    setQuantity((prev) => (prev + 1));
  };

  const handleAddToCartClick = ()=>{
    addProductToCart({...product, quantity})
  }

    return (
      <div className="flex flex-col px-5">
        <h4>{product.name}</h4>

        <div className="flex flex-col gap-1">
          {product.discountPercentage > 0 && (
            <p className="text-sm line-through opacity-60">
              De: {Number(product.basePrice).toFixed(2)}
            </p>
          )}

          {product.discountPercentage > 0 && (
            <Badge className="w-[4.0rem]">
              <ArrowDownIcon size={14} />
              {product.discountPercentage}%
            </Badge>
          )}
          <h1 className="text-xl font-bold">
            R$ {product.totalPrice!.toFixed(2)}
          </h1>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant={"outline"}
              onClick={handleDecreaseQuantifyClick}
            >
              <ArrowLeftIcon size={16} />
            </Button>
            <span className="border-2 border-solid border-primary px-2">
              {quantity}
            </span>
            <Button
              size="sm"
              variant={"outline"}
              onClick={handleIncreaseQuantifyClick}
            >
              <ArrowRightIcon size={14} />
            </Button>
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <h3 className="font-bold">Descrição</h3>
            <p className="text-justify text-[12px] opacity-70">
              {product.description}
            </p>
          </div>
          <Button className="mt-8 font-bold" onClick={handleAddToCartClick}>ADICIONAR AO CARRINHO</Button>

          <div className="flex justify-between rounded-lg bg-accent  px-4 py-1">
            <div className="flex items-center gap-2">
              <TruckIcon />
              <div className="flex flex-col">
                <p className="text-[0.5rem]">
                  Entrega via <span className="font-bold">FWEntregas</span>
                </p>
                <p className="text-[0.75rem] text-primary">Para todo Brasil</p>
              </div>
            </div>
            <p className="mt-2 text-[0.60rem]">FRETE GRÁTIS</p>
          </div>
        </div>
      </div>
    );
}
 
export default ProductInfo;