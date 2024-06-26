"use client"

import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  name: string;
  imageUrls: string[];
}

const ProductImages = ({ imageUrls, name }: ProductImagesProps) => {
    const [currentImage, setCurrentImage] = useState(imageUrls[0])

    const handleImageClick = (imageUrl : string) => {
        setCurrentImage(imageUrl)
    }


  return (
    <div className="flex flex-col">
      <div className="flex h-[380px] w-full items-center justify-center bg-accent">
        <Image
          src={currentImage}
          alt={name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div className="grid grid-cols-4 mt-4 gap-3 px-3">
          {imageUrls.map(imageUrl => (
            <button key={imageUrl} className={`flex items-center justify-center rounded-lg bg-accent h-[80px] gap-4 ${
                imageUrl === currentImage && "border-2 border-solid border-primary"
            }`}
            onClick={()=> handleImageClick(imageUrl)}
            >
                <Image
                    src={imageUrl}
                    alt={name}
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="h-auto max-h-[60%] w-auto max-w-[70%]"
                    style={{
                        objectFit: "contain",
                    }}
                    />
            </button>
          ))}
      </div>
    </div>
  );
};

export default ProductImages;
