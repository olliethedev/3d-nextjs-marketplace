import React from "react";
import { AddToCartSection } from "@/components/AddToCartSection";
import { Page } from "@/components/Page";
import { PRODUCTS } from "@/data";
import { Product } from "@/types";
import { GetServerSideProps } from "next";
import Image from "next/image";

export default function ProductDetail({ product }: { product: Product }) {
  return (
    <Page name={`${product.name} | Marketplace`}>
      <div className="card-body grow space-y-3 flex items-start">
        <InformationSection product={product} />
        <div className="grow w-full">
          <Image
            className="rounded"
            src={product.image}
            alt={product.name}
            width={300}
            height={200}
          />
          <h3 className="title-sm">Price:</h3>
          <p className="body">${product.price}</p>
          <AddToCartSection product={product} />
        </div>
      </div>
    </Page>
  );
}

const InformationSection = ({ product }: { product: Product }) => {
  return (
    <div className="space-x-3">
      <div>
        <h3 className="title-sm">Product:</h3>
        <h1 className="title-lg">{product.name}</h1>

        <h3 className="title-sm">Author:</h3>
        <p className="body">{product.author}</p>
        <h3 className="title-sm">Description:</h3>
        <p className="body">{product.description}</p>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context?.params?.id;
  console.log(id);
  if (typeof id !== "string") {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      product: PRODUCTS.find((product) => product.id === parseInt(id)),
    },
  };
};
