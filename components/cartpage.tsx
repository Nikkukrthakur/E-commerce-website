import React from "react";
import Image from "next/image";
import P2 from "@/public/elephant.jpeg";

const cartpage = (props : any) => {
  return (
    // <div className="min-h-screen bg-white p-6">
    //   <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
    //     {/* left side */}
    //     <div className="md:w-1/2 p-4">
    //     <Image className="w-96" src={P2} alt="" height={300} width={500} />

    //     </div>

    //     {/* Right side */}
    //     <div className=" flex flex-col justify-center items-center my-10   ">
    //       <h2 >Wooden Ambari Elephant</h2>
    //     </div>
    //   </div>
    // </div>

    <div>
      <div className="  flex ">
        <div className="w-1/2 flex justify-center items-center">
          {/* left side */}
          <Image className="w-96" src={props.ImgURL} alt="" height={300} width={500} />

          {/* Right side */}
        </div>
        <div className="w-1/2  justify-center items-center ">
          <div className="text-2xl  ">
            {props.name}
          </div>
          <div className=" flex items-center gap-80 ">
            <div className="text-orange-600 text-3xl font-bold">{props.price}</div>
            <div>
              <div className="text-sm text-gray-500">IN STOCK</div>
              <div className="text-red-500 font-semibold">{props.stock}</div>
            </div>
          </div>

          <div className="flex space-x-2 ">
            <button className="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded">
              Add to Cart
            </button>
            <button className="border border-red-700 text-red-700 px-6 py-2 rounded hover:bg-red-50">
              Buy Now
            </button>
          </div>

          <div className="text-sm text-gray-600 py-3 space-y-1">
            <p>✔ Easy {props.returnDays} days return option  available</p>

            <div className="flex items-center gap-2">
              <p className="text-green-700 font-semibold">✔ 180001</p>
              <button className="text-blue-600 underline text-xs">
                Change
              </button>
            </div>
            <p className="text-green-600 text-xs">
              The product is deliverable at the above PIN code
            </p>
          </div>

          <div className="pt-4 border-t mt-4 text-sm text-gray-700 space-y-2">
            <p>
              
              {props.productDisc}
            </p>

            <ul className="list-disc ml-5">
              <li>
                <strong>Item-Type:</strong> {props.Type}
              </li>
              <li>
                <strong>Dimensions:</strong> {props.dim}
              </li>
              <li>
                <strong>Colour:</strong> {props.color}
              </li>
              <li>
                <strong>Material:</strong> {props.Material}
              </li>
              <li>
                <strong>State of Origin:</strong> {props.Origin}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cartpage;
