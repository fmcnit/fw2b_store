
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "../../components/ui/product-list";
import SectionTitle from "./components/section-tiltle";
import PromoBanner from "./components/promo-banner";

const Home = async () => {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage:{
        gt: 0,
      },
    },
  });
  
  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  })

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },

  })


  return (
    <div className="p-2"> 
  
      <PromoBanner
        src="/banner-home-01.png" 
        alt="Até 55% de desconto"
      
      />
      <div className="mt-8 px-5">
        <Categories/>
        </div>
      <div className="mt-8">
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src="/banner-home-02.png" 
        alt="Até 55% de desconto"
      />
      <div className="mt-8">
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <PromoBanner
        src="/banner-home-03.png" 
        alt="Até 55% de desconto"
      
      />

      <div className="mt-8">
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>
    </div>
  );
};

export default Home;
