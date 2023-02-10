import Head from "next/head";
import React from "react";
import { Navigation } from "./Navigation";

interface PageProps {
  name: string;
  children: React.ReactNode;
}

export const Page = ({ name, children }: PageProps) => {
  return (
    <>
      <Head>
        <title>{name}</title>
        <meta
          name="description"
          content="Markeplace for buying and selling books"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navigation />
        <div className="content">{children}</div>
      </main>
    </>
  );
};
