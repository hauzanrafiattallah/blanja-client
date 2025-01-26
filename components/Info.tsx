import { Product } from "@/types";
import React from "react";
import Currency from "./ui/Currency";
import { Button } from "./ui/button";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4"/>
      <div>
        <Button>
          
        </Button>
      </div>
    </div>
  );
};

export default Info;
