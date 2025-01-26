import getBanner from "@/actions/GetBanner";
import Banner from "@/components/Banner";
import Container from "@/components/ui/Container";
import React from "react";

export const revalidate = 0;

const HomePage = async () => {
  const banner = await getBanner("023a4d0f-87d0-4ea8-afc7-22fbfcb27f6f");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Banner data={banner} />
      </div>
    </Container>
  );
};

export default HomePage;
