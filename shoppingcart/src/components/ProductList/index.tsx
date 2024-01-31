import ProductCard from "../ProductCard";

import { Product } from "@/app/@types/types";

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  return (
    <>
      <div className="w-full">
        <h1 className="text-3xl  font-semibold mb-4 pt-4">Products</h1>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
