import Link from "next/link";
import React from "react";
import { Logo } from "./Logo";

const NavLogo = () => {
  return (
    <div className="flex items-center">
      <Link href="/" aria-label="Home">
        <div className="flex items-center space-x-2 ">
          <Logo className="h-10 w-auto" />
          <span className="title-md text-white">Marketplace</span>
        </div>
      </Link>
    </div>
  );
};

export default NavLogo;
