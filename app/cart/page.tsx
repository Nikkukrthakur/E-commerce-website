import React from "react";
import Cartpage from "@/components/cartpage";
import IMGUU from "@/public/elephant.jpeg";
import Shirt1 from "@/public/shirt1.jpg";
import Shirt2 from "@/public/shirt2.jpg";
import Saree from "@/public/women.png";
import Lamp from "@/public/lamp.png";
import Pot from "@/public/pot.png";
import Bag from "@/public/bag.png";
import Basket from "@/public/basket.png";
import Pot1 from "@/public/pot1.png";
const cart = () => {
  return (
    <div className="mb-10 ">
      <div className="space-y-8">
        <Cartpage
          name="Embellished Lamp with Dhokra Brass Tiles & Red Shade"
          stock="Only 5 left"
          Type="Handicraft"
          dim="2x2x6"
          color=""
          Origin="Jammu & Kashmir"
          price="₹3,099.00"
          ImgURL={IMGUU}
          returnDays="10"
          productDisc="Experience the charm of traditional Indian craftsmanship with this exquisite lamp embellished with Dhokra brass tiles and a captivating red shade This handcrafted masterpiece combines the intricate art of Warli painting with the elegance of black Dhokra work on a wooden table lamp"
        />
        {/* <Cartpage name = "Sahil" price="₹3,099.00" returnDays = "10" ImgURL = {IMGUU} productDisc = "Experience the charm of traditional Indian craftsmanship with this exquisite lamp embellished with Dhokra brass tiles and a captivating red shade This handcrafted masterpiece combines the intricate art of Warli painting with the elegance of black Dhokra work on a wooden table lamp"/> */}
        {/* <Cartpage  name = "Thakur" price="₹3545.00" ImgURL = {IMGUU} returnDays = "18" productDisc = "Experience the charm of traditional Indian craftsmanship with this exquisite lamp embellished with Dhokra brass tiles and a captivating red shade This handcrafted masterpiece combines the intricate art of Warli painting with the elegance of black Dhokra work on a wooden table lamp"/> */}
        <Cartpage
          name="Shirt"
          price="₹1000.00"
          stock="Only 10 left"
          ImgURL={Shirt1}
          returnDays="7"
          dim="None"
          Type=""
          color=""
          Origin="Tamil nadu"
          productDisc="The fabric is made in Cuddalore district in Tamil nadu State. The Cuddalore district is mostly famous in cotton handloom manufacturing. The Shirting is suitable in Summer and Winter."
        />
        <Cartpage
          name="Shirt"
          price="₹1000.00"
          ImgURL={Shirt2}
          returnDays="7"
          dim=" None "
          Type=""
          color=""
          Origin="Tamil nadu"
          productDisc="The fabric is made in Cuddalore district in Tamil nadu State. The Cuddalore district is mostly famous in cotton handloom manufacturing. The Shirting is suitable in Summer and Winter."
        />
        {/* <Cartpage  name = "Shirt" price="₹1000.00" ImgURL = {Shirt2} returnDays = "7" dim=" " Type="" Origin = "Bihar" productDisc = "The fabric is made in Cuddalore district in Tamil nadu State. The Cuddalore district is mostly famous in cotton handloom manufacturing. The Shirting is suitable in Summer and Winter."/> */}
        <Cartpage
          name="UPPADA JAMDANI BIG BUTA SILK SAREE"
          price="₹8100.00"
          dim="width- 47 "
          Type=""
          color="Dual-tone Magenta & Violet"
          ImgURL={Saree}
          returnDays="7"
          Origin="Bihar"
          productDisc="Step into elegance with our Royal Radiance Pure Silk Saree, a magnificent fusion of magenta and violet tones designed for timeless grace. Crafted from luxurious pure silk, this saree showcases exquisite golden zari floral motifs woven across the body, creating a subtle yet striking visual harmony."
        />
        <Cartpage
          name="Embellished Lamp with Dhokra Brass Tiles & Red Shade"
          price="₹3000.00"
          dim="4 x 4 x 17 inches "
          Type="Handicraft"
          color="Multi"
          ImgURL={Lamp}
          returnDays="7"
          Material="Wood"
          stock="Only 10 left"
          Origin="Jammu & Kashmir"
          productDisc="Experience the charm of traditional Indian craftsmanship with this exquisite lamp embellished with Dhokra brass tiles and a captivating red shade. This handcrafted masterpiece combines the intricate art of Warli painting with the elegance of black Dhokra work on a wooden table lamp."
        />
        <Cartpage
          name="Wicker Planter Set of 3"
          price="₹1,285.00"
          dim="9 x 9 inches "
          Type="Handicraft"
          color="Natural with plus symbols of green, blue and red"
          ImgURL={Pot}
          returnDays="7"
          Material="Sabai and date palm leaf"
          stock="Only 10 left"
          Origin="Jammu & Kashmir"
          productDisc=" Add to an eco-friendly gardening collection by indulging in the handmade sabai planters. The handmade planters come in a set of 3 variable sizes - large, medium and small. Weaved with extreme care and intricacy, the handmade plant pots are ideal for planting little flowers or succulents, along with doubling as decorative accents on a balcony, console table, or mantelpiece. The eco-friendly planters retain their natural color and each have simple cross/plus signs weaved onto them and dyed using completely organic vegetable colours, which adds to their minimal aesthetic. The large one has bottle green signs, the medium one has navy blue ones, and the small one has red plus symbols.
            Plants are not included with the planters.  "
        />
        <Cartpage
          name="Eco Friendly Jute Lunch Bag Beige And Red 15 x 10 Inch"
          price="₹705.00"
          dim="37cm L x 12cm B x 25cm H With handle- 37cm H"
          Type="Handicraft"
          color="Beige, red, black"
          ImgURL={Bag}
          returnDays="7"
          Material="Jute, PU leather"
          stock="Only 10 left"
          Origin="Tamil Nadu"
          productDisc=" The jute lunch bag is extremely handy and looks fashionable while being carried on the go. The lunch bag has been expertly stitched and crafted of 100% high-quality jute, making the lunch a sustainable accessory that's also stylish. The jute lunch bag is spacious enough to carry lunchboxes, snacks, and water bottles. The lunchbox bag has a textured jute exterior, and its interior is lined with a water and stain-resistant material. The utilitarian lunch bag features a smooth zipper and sturdy fitted handles that make the bag easy to carry."
        />
        <Cartpage
          name="Wicker Storage Basket Set of 3"
          price="₹1,995.00"
          dim="12 x 8 x 10 x 3 inches"
          Type="Handicraft"
          color="Natural"
          ImgURL={Basket}
          returnDays="7"
          Material=" Sabai and date palm leaf"
          stock="Only 10 left"
          Origin="Tamil Nadu"
          productDisc="Set of 3 natural sabai grass handwoven baskets that can be used as fruit baskets on the dining table or in the kitchen. The versatile baskets can be used for storing a number of items, from vegetables to toys and trinkets. The naturally made baskets can also be used as a tray on the side or coffee table to place books and decor pieces. The set of 3 baskets together can also be used as a snack tray for keeping jars of snacks, pickles and munchies. The baskets come in 3 sizes - large, medium and small but are all of the same height. The round tray set is naturally dried and retains the simple aesthetic of the braided product."
        />
        <Cartpage
          name="Mittify Handmade Terracotta Clay Water Pot 8L with Lid & Metal Tap, Mandala Art Design 8000 ml Bottle  (Pack of 1, Brown, Clay)"
          price="₹2,499.00"
          dim="35 x 16 cm "
          Type="Handicraft"
          color="Brown,Clay"
          ImgURL={Pot1}
          returnDays="7"
          Material=" Clay"
          stock="Only 5 left"
          Origin="Bihar"
          productDisc="The beauty of Indian craftsmanship with Mittify Handmade Clay Water Pot. Handcrafted by skilled artisans in India, each pot reflects a tradition passed down through generations. Made from terracotta, this earthen water pot keeps your drinking water cool and fresh without any fuss. It's like having a sip of nature every time you take a drink. With a big 8 litre size, it's perfect for families"
        />
      </div>
    </div>
  );
};

export default cart;
