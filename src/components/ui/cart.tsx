import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart"
import CartItem from "./cart-item";
import { Separator } from "@radix-ui/react-separator";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";
import { createCheckout } from "@/actions/checkout";
import { loadStripe } from "@stripe/stripe-js";

const Cart = ( ) => {
    const { products, total, subTotal, totalDiscount } = useContext(CartContext)
    
    const handleFinishPurchaseClick = async ()=>{
      const checkout= await createCheckout(products)

      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

      stripe?.redirectToCheckout({
        sessionId: checkout.id
      })
    }

    return (
      <div className="flex h-full flex-col gap-8">
        <Badge
          className=" w-fit gap-1 border-2 border-primary text-base uppercase"
          variant="outline"
        >
          <ShoppingCartIcon size={16} />
          Carrinho
        </Badge>

        <div className="flex h-full max-h-full flex-col gap-5 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="flex h-full flex-col gap-8">
              {products.length < 1 ? (
                <p className="mt-3 text-[0.6rem] ">Nenhum produto adicionado</p>
              ) : (
                products.map((product) => (
                  <div>
                    <CartItem product={product} />
                  </div>
                ))
              )}
            </div>
          </ScrollArea>
        </div>
        <div className="flex flex-col gap-3">
          <Separator />

          <div className="flex items-center justify-between text-xs">
            <p>Subtotal</p>
            <p>R$ {subTotal.toFixed(2)}</p>
          </div>

          <div className="flex items-center justify-between text-xs">
            <p>Frete</p>
            <p>Grátis</p>
          </div>

          <div className="flex items-center justify-between text-xs">
            <p>Descontos</p>
            <p>- R$ {totalDiscount.toFixed(2)}</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between font-bold">
            <p>Total</p>
            <p>R$ {total.toFixed(2)}</p>
          </div>

          <Button
            className="mt-7 font-bold uppercase"
            onClick={handleFinishPurchaseClick}
          >
            Finalizar Compra
          </Button>
        </div>
      </div>
    );}
 
export default Cart;   