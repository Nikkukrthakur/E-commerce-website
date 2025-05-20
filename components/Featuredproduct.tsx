import React from "react";
import Image from "next/image";
import p1 from "@/public/spoon.png";
import p2 from "@/public/elephant.jpeg";
import p3 from "@/public/comb.jpg";
import Shirt from "@/public/shirt1.jpg";
import bag from "@/public/bag.png";
import Link from "next/link";
const Featuredproduct = (props: any) => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Product 1 */}
          <Link href="/cart">
            <div className="bg-white rounded-lg shadow p-4">
              <Image
                src={props.picurl}
                alt=""
                height={200}
                width={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">{props.title}</h3>
              <p className="text-gray-500">{props.discrip}</p>
            </div>
          </Link>
          {/* Product 2 */}
          <Link href="/cart">
            <div className="bg-white rounded-lg shadow p-4">
              <Image
                src={props.picurl1}
                alt=""
                height={100}
                width={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">{props.title1}</h3>
              <p className="text-gray-500">{props.discrip1}</p>
            </div>
          </Link>

          {/* Product 3 */}
          <Link href="/cart">
            <div className="bg-white rounded-lg shadow p-4">
              <Image
                src={props.picurl2}
                alt=""
                height={500}
                width={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <h3 className="text-lg  font-semibold">{props.title2}</h3>
              <p className="text-gray-500">{props.discrip2}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featuredproduct;
