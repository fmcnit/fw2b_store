import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <div className="flex flex-col">
        <div className="flex h-[150px] w-full items-center justify-center rounded-t-lg bg-gradient-to-r from-[#150066] to-[#4f25f5]">
          <Image
            src={category.imageUrl}
            alt={category.name}
            width={0}
            height={0}
            sizes="100vh"
            className="max-w-[90%] h-auto max-h-[70%] w-[80%]"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className="rounded-bl-lg rounded-br-lg bg-accent py-2">
          <p className="text-center text-sm font-semibold">{category.name}</p>
        </div> 
      </div>
    </Link>
  );
};

export default CategoryItem;
