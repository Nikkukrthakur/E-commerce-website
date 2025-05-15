import React from 'react'
import Cartpage from '@/components/cartpage'
import IMGUU from "@/public/elephant.jpeg"
import Shirt1 from "@/public/shirt1.jpg"
import Shirt2 from "@/public/shirt2.jpg"
import Saree from "@/public/women.png"
const cart = () => {
  return (
    <div className='mb-10 '>
      <div className='space-y-8'>
      <Cartpage  name = "Embellished Lamp with Dhokra Brass Tiles & Red Shade"  Type="Handicraft"  dim="2x2x6" color= ""  Origin = "Jammu & Kashmir" price="₹3,099.00" ImgURL = {IMGUU} returnDays = "10" productDisc = "Experience the charm of traditional Indian craftsmanship with this exquisite lamp embellished with Dhokra brass tiles and a captivating red shade This handcrafted masterpiece combines the intricate art of Warli painting with the elegance of black Dhokra work on a wooden table lamp"/>
      {/* <Cartpage name = "Sahil" price="₹3,099.00" returnDays = "10" ImgURL = {IMGUU} productDisc = "Experience the charm of traditional Indian craftsmanship with this exquisite lamp embellished with Dhokra brass tiles and a captivating red shade This handcrafted masterpiece combines the intricate art of Warli painting with the elegance of black Dhokra work on a wooden table lamp"/> */}
      {/* <Cartpage  name = "Thakur" price="₹3545.00" ImgURL = {IMGUU} returnDays = "18" productDisc = "Experience the charm of traditional Indian craftsmanship with this exquisite lamp embellished with Dhokra brass tiles and a captivating red shade This handcrafted masterpiece combines the intricate art of Warli painting with the elegance of black Dhokra work on a wooden table lamp"/> */}
      <Cartpage  name = "Shirt" price="₹1000.00" ImgURL = {Shirt1} returnDays = "7"  dim="None" Type=""color= ""  Origin = "Tamil nadu" productDisc = "The fabric is made in Cuddalore district in Tamil nadu State. The Cuddalore district is mostly famous in cotton handloom manufacturing. The Shirting is suitable in Summer and Winter."/>
      <Cartpage  name = "Shirt" price="₹1000.00" ImgURL = {Shirt2} returnDays = "7"  dim=" None " Type=""color= ""  Origin = "Tamil nadu" productDisc = "The fabric is made in Cuddalore district in Tamil nadu State. The Cuddalore district is mostly famous in cotton handloom manufacturing. The Shirting is suitable in Summer and Winter."/>
      {/* <Cartpage  name = "Shirt" price="₹1000.00" ImgURL = {Shirt2} returnDays = "7" dim=" " Type="" Origin = "Bihar" productDisc = "The fabric is made in Cuddalore district in Tamil nadu State. The Cuddalore district is mostly famous in cotton handloom manufacturing. The Shirting is suitable in Summer and Winter."/> */}
      <Cartpage  name = "UPPADA JAMDANI BIG BUTA SILK SAREE" price="₹8100.00" dim="width- 47 " Type="" color= "Dual-tone Magenta & Violet" ImgURL = {Saree} returnDays = "7" Origin = "Bihar" productDisc = "Step into elegance with our Royal Radiance Pure Silk Saree, a magnificent fusion of magenta and violet tones designed for timeless grace. Crafted from luxurious pure silk, this saree showcases exquisite golden zari floral motifs woven across the body, creating a subtle yet striking visual harmony."/>
      
      
      
      
      
      </div>
    </div>
  )
}

export default cart
