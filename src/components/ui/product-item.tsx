import { ProductWithTotalPrice } from "@/helpers/products"
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {  ArrowDownIcon } from "lucide-react"
import Link from "next/link";

interface ProductItemProps{
    product: ProductWithTotalPrice;
}

const ProductItem = ({product}: ProductItemProps) => {
    return (
      <Link href={`/product/${product.slug}`}>
        <div className="flex h-full w-full flex-col gap-4">
          <div className="relative flex h-[170px] items-center justify-center rounded-lg bg-accent">
            <Image
              src={product.imageUrls[0]}
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
              style={{ objectFit: "contain" }}
              alt={product.name}
            />
            {product.discountPercentage > 0 && (
              <Badge className="absolute left-3 top-3 px-2 py-[2px]">
                <ArrowDownIcon size={10} />
                {product.discountPercentage}%
              </Badge>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
              {product.name}
            </p>
            <div className="flex items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap">
              {product.discountPercentage > 0 ? (
                <>
                  <p className="text-xs font-semibold">
                    R${product.totalPrice.toFixed(2)}
                  </p>

                  <p className="text-[0.6rem] line-through opacity-75">
                    R${Number(product.basePrice).toFixed(2)}
                  </p>
                </>
              ) : (
                <p className="text-sm font-semibold ">
                  R$ {product.basePrice.toFixed(2)}
                </p>
              )}
            </div>
          </div>
        </div>
      </Link>
    );
}

export default ProductItem; 