import { Input } from "@heroui/input";
import React from "react";
import Image from "next/image";
import Pic from "@/public/product.png";

const frontend = () => {
  return (
    <div>
      <div className=" relative flex justify-center rounded-md ">
        <Image
          className="rounded-lg"
          src={Pic}
          alt=""
          height={200}
          width={600}
        />
        <div className="absolute inset-20 bg-black bg-opacity-50 flex items-center justify-center">
        <h2 className="text-white text-3xl font-bold">Discover the Art of Homemade </h2>
      </div>
      </div>

      <div className=" bg-slate-500 ">
        <Input
          className="h-28"
          label=""
          placeholder="Search category"
          type="text"
        />
      </div>
     
    </div>
  );
};

export default frontend;
