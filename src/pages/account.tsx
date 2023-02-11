import React from "react";
import { Page } from "@/components/Page";
import dynamic from "next/dynamic";

const AccountForm = dynamic(() => import("../components/AccountForm"), {
  ssr: false,
});

/*
 *  This is the account page. It contains the AccountForm component.
 */
export default function Cart() {
  return (
    <Page name="Account | Marketplace">
      <div className="grow">
        <h1 className="title-lg">Account</h1>
        <AccountForm />
      </div>
    </Page>
  );
}
