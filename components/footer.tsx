import { Input } from "@heroui/input";
import React from "react";

const footer = () => {
  return (
    <div className="mt-16">
      <div className="bg-[#3C2F2F] text-white px-8 py-12 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          {/* Left Section */}
          <div className="space-y-6">
            <div>
              <div className="font-semibold mb-2">Useful Links</div>
              <div className="space-y-1">
                <div className="hover:underline">Privacy Policy</div>
                <div className="hover:underline">Terms & Conditions</div>
              </div>
            </div>

            <div>
              <div className="font-semibold">Copyright</div>
              <div>Complete Nutrition © 2019</div>
            </div>
          </div>

          

          {/* Right Section */}
          <div className="max-w-sm w-full">
            <div className="font-semibold text-lg mb-2">
              Subscribe to our newsletter and
              <br />
              Get 10% off
              <div className="space-y-2">
                <div className=" ">
                  <Input
                //   variant="bordered"
                size="lg"
                    className=""
                    label=""
                    placeholder="Enter your email "
                    type="email"
                  />
                </div>

                <button className="w-full bg-white text-black font-semibold py-2 rounded-md hover:bg-gray-200 space-y-4">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="text-gray-300 text-sm mt-2">
              Get regular updates on our product with our newsletter.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
