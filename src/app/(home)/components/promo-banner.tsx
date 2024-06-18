import { ImageProps } from "next/image";
import Image from "next/image";

const PromoBanner = ({alt, ...props}: ImageProps) => {
    return (  
        <Image
    
        height={0}
        width={0}
        className="h-auto w-full mt-4"
        sizes="100%"
        alt={alt} 
        {...props}    
      />


    );
}
 
export default PromoBanner;