import React from "react";
import Heading from "../general/Heading";
import ProductsCard from "./ProductsCard";
import { products } from "@/../../utils/Products";

const Products = () => {
  return (
    <div>
      <Heading text="Tüm ürünler" />
      <div className="flex items-center flex-wrap gap-3 md:gap-10 px-3 md:px-10">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
