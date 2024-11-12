import Link from "next/link";
import React from "react";
import Image from "next/image";

import BrandImg from "@/assets/LogoWhite.png";

function Footer() {
  return (
    <footer className="pt-10  text-black border-t border-blue-500">
      <div className="max-w-7xl py-10 mx-auto flex flex-col md:flex-row px-5 md:justify-between">
        <div className="flex flex-col items-center">
          <Image
            src={BrandImg}
            alt="brandImg"
            width={1000}
            height={1000}
            className="h-14 p-1  rounded-[6px] border-2 bg-black border-black   object-cover w-14 object-top"
          />
          <span className="text-2xl font-bold">NoblesseTech</span>
        </div>
        <div className="mt-8 md:mt-0">
          <h1 className="font-bold text-lg">Quick Links</h1>
          <div className="flex flex-col">
            <Link className="hover:text-blue-500 duration-500" href="/about">
              About
            </Link>
            <Link className="hover:text-blue-500 duration-500" href="/service">
              Services
            </Link>
            <Link className="hover:text-blue-500 duration-500" href="/work">
              Our Work
            </Link>
            <Link className="hover:text-blue-500 duration-500" href="/our-team">
              Our Team
            </Link>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <h1 className="font-bold text-lg">Get In Touch</h1>
          <div>
            <p>Contact No :+91 88270 15401</p>
            <p>
              Email : <a href="mailto:admin@tecklo.com">admin@noblessetech.com</a>
            </p>
            {/* <p>Office: 27358 32 avenue, Aldergrove, BC V4W 3M5</p> */}
          </div>
        </div>
      </div>
      <div className="p-5 text-center border-t border-blue-500 max-w-4xl mx-auto flex flex-col gap-2 itme-center justify-center">
        <p>copyright &copy; 2024 NoblesseTech. All Rights Reserved.</p>
        {/* <p className="text-sm">
          Made by{" "}
          <a href="https://noblessetech.com/" className="font-bold underline">
            Noblessetech
          </a>
        </p> */}
      </div>
    </footer>
  );
}

export default Footer;
