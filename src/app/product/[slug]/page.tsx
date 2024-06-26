import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";
import ProductInfo from "./components/product-info";
import { computeProductTotalPrice } from "@/helpers/products";
import ProductList from "@/components/ui/product-list";

interface ProductDetailsPageProps{
    params: {
        slug: string
    }
}

const ProductDetailsPage = async ({ params : {slug} } : ProductDetailsPageProps) => {

    const product = await prismaClient.product.findFirst({
        where:{
            slug: slug,
        },
        include: {
            category:{
                include:{
                    products: {
                        where:{
                            slug:{
                                not:slug,
                            }
                        }
                    }
                }
            }
        }
    })

    if (!product) return null;

    return ( 
        <div>
            <ProductImages imageUrls={product.imageUrls} name={product.name}/>
            <ProductInfo product={computeProductTotalPrice(product)}/>
            <div className="mt-8">
                <h2 className="p-2">Produtos Recomendados</h2>
                <ProductList products={ product.category.products }/>
            </div>
        </div>
     );
}
 
export default ProductDetailsPage;