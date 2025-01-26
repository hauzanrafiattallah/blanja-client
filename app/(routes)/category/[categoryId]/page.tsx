import getCategory from "@/actions/GetCategory";
import getProducts from "@/actions/GetProducts";
import Banner from "@/components/Banner";
import Container from "@/components/ui/Container";
import NoResult from "@/components/ui/NoResult";
import ProductCard from "@/components/ui/ProductCard";
import React from "react";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params }) => {
  const products = await getProducts({
    categoryId: params.categoryId,
  });

  const category = await getCategory(params.categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Banner data={category.banner} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="mt-6 lg:col-span-4 lg:mt-0">
            {products.length === 0 && <NoResult />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} data={product} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
