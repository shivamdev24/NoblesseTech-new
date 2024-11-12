


import {
  Menubar,
  MenubarMenu,
} from "@/components/ui/menubar";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import BrandImg from "@/assets/LogoWhite.png";

function Navbar() {
  return (
    <nav className="sticky top-0 w-full z-50">
      <div className=" border bg-white border-purple-100 shadow-lg shadow-blue-200  ">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 text-black py-3">
          <div className="relative">
            <Link href="/" className="flex gap-1 items-center">
              <Image
                src={BrandImg}
                alt="brandImg"
                width={1000}
                height={1000}
                className="h-8 p-1  rounded-[6px] border-2 bg-black border-black   object-cover w-8 object-top"
              />
              {/* Tecklo.Co */}
              <span className="text-xl font-bold">NoblesseTech</span>
            </Link>
          </div>
          <div className="hidden lg:block">
            <Menubar className="border-none bg-transparent gap-4 text-lg">
              <MenubarMenu>
                <Link href="/" className="hover:text-blue-500 duration-500">
                  Home
                </Link>
              </MenubarMenu>
              <MenubarMenu>
                <Link
                  href="/about"
                  className="hover:text-blue-500 duration-500"
                >
                  About
                </Link>
              </MenubarMenu>
              <MenubarMenu>
                <Link
                  href="/service"
                  className="hover:text-blue-500 duration-500"
                >
                  Services
                </Link>
              </MenubarMenu>
              <MenubarMenu>
                <Link
                  href="/work"
                  className="hover:text-blue-500 duration-500 hidden md:block"
                >
                  Our Work
                </Link>
              </MenubarMenu>
              <MenubarMenu>
                <Link
                  href="/our-team"
                  className="hover:text-blue-500 duration-500 hidden md:block"
                >
                  Our Team
                </Link>
              </MenubarMenu>
            </Menubar>
          </div>
          <div className="lg:hidden bg-white">
            <Sheet>
              <SheetTrigger>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                  />
                </svg>
              </SheetTrigger>
              <SheetContent className="w-56 bg-white">
                <SheetHeader>
                  <div className="flex flex-col gap-4 mt-6 text-center">
                    <Link href="/" className="hover:text-blue-500 duration-500">
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className="hover:text-blue-500 duration-500"
                    >
                      About
                    </Link>
                    <Link
                      href="/service"
                      className="hover:text-blue-500 duration-500"
                    >
                      Services
                    </Link>
                    <Link
                      href="/work"
                      className="hover:text-blue-500 duration-500"
                    >
                      Our Work
                    </Link>
                    <Link
                      href="/our-team"
                      className="hover:text-blue-500 duration-500"
                    >
                      Our Team
                    </Link>
                  
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
