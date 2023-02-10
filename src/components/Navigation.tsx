import React, { useState } from "react";
import { useRouter } from "next/router";
import NavLogo from "./NavLogo";
import Link from "next/link";
// navigation header that is displayed on all pages. it contains the logo and link to home, products, cart and account page. It highlights the current page.
const pages = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "Cart",
    href: "/cart",
  },
  {
    name: "Account",
    href: "/account",
  },
];

export const Navigation = () => {
  const router = useRouter();
  const currentPage = router.pathname;

  return (
    <div className="bg-primary">
      <div className="md:hidden flex bg-yellow-700 text-white text-lg">
        Unsupported screen size
      </div>
      <div className="flex content-size">
        <NavLogo />
        <div className="flex justify-center space-x-3 grow py-4">
          {pages.map((page) => (
            <div
              key={page.name}
              className={`btn-link-light ${
                currentPage === page.href ? "underline" : ""
              }`}
            >
              <Link href={page.href} aria-label={page.name}>
                {page.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
