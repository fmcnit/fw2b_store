import { Children, ComponentProps } from "react";

const SectionTitle = ({children, ...props}: ComponentProps<"p">) => {
    return ( 
        <p className="font-semibold uppercase pl-5 mb-5"{...props}>{children}
        </p> 
    );
}
 
export default SectionTitle;