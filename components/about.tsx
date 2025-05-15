import React from "react";
import Image from "next/image";
import img1 from "@/public/ab3.jpeg";
import img2 from "@/public/about-2.png";
import img3 from "@/public/ab5.jpg";
import img4 from "@/public/elephant.jpeg";

const about = () => {
  return (
    <div className="">
      <div className="bg-[#fdf1dd] py-12 px-6 rounded-lg shadow-lg border-2 border-[#ffdfa9]">
        <div className="flex gap-4">
          {/* Text Section */}
          <div className="w-1/2 text-gray-700 text-lg space-y-4">
            <div>
              <div className="text-4xl font-semibold text-gray-800 mb-6 text">
                About <span className="text-indigo-900">"ARTISAN ALLEY"</span>
              </div>
              IndiaHandmade is a project by the Ministry of Textiles to
              highlight the work of rural artisans and weavers. The main goal of
              this online shopping platform is to display some of the world’s
              oldest and most traditional Indian crafts.We aim to provide a
              platform for Handloom Weavers in India and Handicraft Artisans to
              sell their handloom and handicraft items online in India, paving
              the way for their financial and social empowerment. This helps in
              promoting the Artisans & Weavers skills while eliminating the
              intermediaries.
            </div>
          </div>

          {/* Image Section */}
          <div className="w-1/2 flex gap-2">
            <div className="space-y-2">
              <Image
                src={img1}
                alt=""
                width={300}
                height={200}
                className="rounded-xl"
              />
              <Image
                className="rounded-xl"
                src={img2}
                alt=""
                width={300}
                height={200}
              />
            </div>
            <div className="space-y-7">
              <Image
                className="rounded-xl"
                src={img2}
                alt=""
                width={300}
                height={200}
              />
              <Image
                src={img3}
                alt=""
                width={300}
                height={200}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
