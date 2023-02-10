import { Page } from "@/components/Page";
import { PRODUCTS } from "@/data";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Products({ products }: { products: Product[] }) {
  return (
    <Page name="Products | Marketplace">
      <div className="grow">
        <h1 className="title-lg">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Page>
  );
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="card p-4">
        <div className="flex flex-col w-full space-y-3">
          <div className="relative w-full grow h-52">
            <Image
              src={product.image}
              alt={product.name}
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <h2 className="title-sm">{product.name}</h2>
          <p className="text-sm">${product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {
      products: PRODUCTS,
    },
  };
};
