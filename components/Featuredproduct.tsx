import React from "react";
import Image from "next/image";
import p1 from "@/public/spoon.png";
import p2 from "@/public/elephant.jpeg";
import p3 from "@/public/comb.jpg";
function Featuredproduct(props: any) {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Product 1 */}
          <div className="bg-white rounded-lg shadow p-4">
            <Image
              src={p1}
              alt=""
              height={200}
              width={200}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold">Wooden Serving</h3>
            <p className="text-gray-500">
              Rs-850 – Neem Wooden Serving/Cooking Spatulas & Ladles Set of 5
              Natural Finish{" "}
            </p>
          </div>

          {/* Product 2 */}
          <div className="bg-white rounded-lg shadow p-4">
            <Image
              src={p2}
              alt=""
              height={100}
              width={200}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold">Handicraft</h3>
            <p className="text-gray-500">Rs-1,500.00 –Wooden Ambari Elephant</p>
          </div>

          {/* Product 3 */}
          <div className="bg-white rounded-lg shadow p-4">
            <Image
              src={p3}
              alt=""
              height={500}
              width={200}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <h3 className="text-lg  font-semibold">Wood Comb</h3>
            <p className="text-gray-500">
              Rs-99 – Neem Wood Pocket Comb | Handmade | Unisex | Eco-Friendly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featuredproduct;
