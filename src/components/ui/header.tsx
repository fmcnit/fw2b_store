"use client";
import { HomeIcon, ListOrderedIcon, LogInIcon, MenuIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "./sheet"; 
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";
import Cart from "./cart";
import CartItem from "./cart-item";


const Header = () => {

    const {status, data} = useSession();

    const handleLoginClick = async() => {
        await signIn();
        
    };
    const handleLogoutClick = async() => {
        await signOut();
        
    };
    

    return (
      <Card className="flex items-center justify-between p-[1.875rem]">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader className="text-left text-lg font-semibold">
              Menu
            </SheetHeader>

            {status == "authenticated" && data?.user && (
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarFallback>
                    {data.user.name?.[0].toUpperCase()}
                  </AvatarFallback>

                  {data.user.image && <AvatarImage src={data.user.image} />}
                </Avatar>
                <div className=" flex flex-col">
                  <p className="font-medium">{data.user.name}</p>
                  <p className="text-sm opacity-50">Boas Compras</p>
                </div>
              </div>
            )}

            <div className="mt-2 flex flex-col gap-3">
              {status == "unauthenticated" && (
                <Button
                  onClick={handleLoginClick}
                  variant={"outline"}
                  className="w-full justify-start gap-1"
                >
                  <LogInIcon />
                  Fazer Login
                </Button>
              )}
              {status == "authenticated" && (
                <Button
                  onClick={handleLogoutClick}
                  variant={"outline"}
                  className="w-full justify-start gap-1"
                >
                  <LogInIcon />
                  Fazer Logout
                </Button>
              )}

              <Button
                variant={"outline"}
                className="w-full justify-start gap-1"
              >
                <HomeIcon />
                Início
              </Button>

              <Button
                variant={"outline"}
                className="w-full justify-start gap-1"
              >
                <PercentIcon />
                Ofertas
              </Button>

              <SheetClose asChild>
                <Link href="/catalog">
                  <Button
                    variant={"outline"}
                    className="w-full justify-start gap-1"
                  >
                    <ListOrderedIcon />
                    Catálogo
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/">
          <h1 className="text-lg font-semibold">
            <span className="text-primary">FMDev</span> Store
          </h1>
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <ShoppingCartIcon></ShoppingCartIcon>
            </Button>
          </SheetTrigger>

          <SheetContent>
            <Cart/>
          
          </SheetContent>
        </Sheet>
      </Card>
    );
}
export default Header;