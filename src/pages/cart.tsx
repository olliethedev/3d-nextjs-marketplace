import React from "react";
import { Page } from "@/components/Page";
import dynamic from "next/dynamic";

const CartList = dynamic(() => import("../components/CartList"), {
  ssr: false,
});

/*
 *  This is the cart page. It contains the CartList component.
 */
export default function Cart() {
  return (
    <Page name="Cart | Marketplace">
      <div className="grow">
        <h1 className="title-lg">Cart</h1>
        <CartList />
      </div>
    </Page>
  );
}
