import getBanner from "@/actions/GetBanner";
import getProducts from "@/actions/GetProducts";
import Banner from "@/components/Banner";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";
import React from "react";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const banner = await getBanner("023a4d0f-87d0-4ea8-afc7-22fbfcb27f6f");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Banner data={banner} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Produk Unggulan" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
