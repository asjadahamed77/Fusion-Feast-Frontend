import chicken_biriyani from "./Biriyani/Chicken Biriyani.png";
import dum_biriyani from "./Biriyani/Dum Biriyani.png";
import fusion_special from "./Biriyani/Fusion Special.png";
import Ghee_rice from "./Biriyani/Ghee Rice.png";
import mutton_biriyani from "./Biriyani/Mutton Biriyani.png";
import spanish_rice from "./Biriyani/Spanish Rice.png";
import chinese_fried_rice from "./Biriyani/Chinese Fried Rice.png";
import bacon_fried_rice from "./Biriyani/Bacon Fried Rice.png";
import malaysian_rice from "./Biriyani/Malaysian Rice.png";
import american_nasi from "./Biriyani/American Nasi.png";
import chicken_nasi from "./Biriyani/Chicken Nasi Goreng.png";
import mixed_rice from "./Biriyani/Mixed Rice.png";

import faluda from "./Juice/faluda.png";
import avacado from "./Juice/avacado.png";
import lime from "./Juice/lime.png";
import papaya from "./Juice/papaya.png";
import orange from "./Juice/orange.png";
import watermelon from "./Juice/orange.png";

import prawnKottu from './Kottu/prawnkottu.png'
import cheeseKottu from './Kottu/Cheese Kottu.png'
import chickenKottu from './Kottu/Chicken Kottu.png'
import fusionSpecialKottu from './Kottu/Fusion Special Kottu.png'

import fusionSpecialIceCream from './Ice Cream/Fusion Special Ice Cream.png'
import iceCreamWithBeries from './Ice Cream/Ice Cream with Beries.png'
import strawberySpecialIceCream from './Ice Cream/Strawberry Special.png'

import beefShawarma from './Shawarma/Beef Shawarma.png'
import chickenShawarma from './Shawarma/Chicken Shawarma.png'

import doubleBeefBurger from './Burger/Double Beef Burger.png'
import hotSpicyBurger from './Burger/Hot Spicy Burger.png'

import beefSpicySubmarine from './Submarine/Beef Spicy Submarine.png'
import cheeseChickenSubmarine from './Submarine/Cheese Chicken Submarine.png'

const menuItems = [
  {
    item_id: "01",
    item_name: "Chicken Biriyani",
    item_image: chicken_biriyani,
    item_price: "1850",
    item_category: "rice",
  },
  {
    item_id: "02",
    item_name: "Dum Biriyani",
    item_image: dum_biriyani,
    item_price: "1950",
    item_category: "rice",
  },
  {
    item_id: "03",
    item_name: "Fusion Special",
    item_image: fusion_special,
    item_price: "1650",
    item_category: "rice",
  },
  {
    item_id: "04",
    item_name: "Ghee Rice",
    item_image: Ghee_rice,
    item_price: "1150",
    item_category: "rice",
  },
  {
    item_id: "05",
    item_name: "Mutton Biriyani",
    item_image: mutton_biriyani,
    item_price: "2100",
    item_category: "rice",
  },
  {
    item_id: "06",
    item_name: "Spanish Rice",
    item_image: spanish_rice,
    item_price: "1700",
    item_category: "rice",
  },
  {
    item_id: "07",
    item_name: "Chinese Fried Rice",
    item_image: chinese_fried_rice,
    item_price: "1950",
    item_category: "rice",
  },
  {
    item_id: "08",
    item_name: "Bacon Fried Rice",
    item_image: bacon_fried_rice,
    item_price: "2100",
    item_category: "rice",
  },
  {
    item_id: "09",
    item_name: "Malaysian Rice",
    item_image: malaysian_rice,
    item_price: "2350",
    item_category: "rice",
  },
  {
    item_id: "10",
    item_name: "American Nasi Goreng",
    item_image: american_nasi,
    item_price: "2450",
    item_category: "rice",
  },
  {
    item_id: "11",
    item_name: "Chicken Nasi Goreng",
    item_image: chicken_nasi,
    item_price: "2350",
    item_category: "rice",
  },
  {
    item_id: "12",
    item_name: "Mixed Rice",
    item_image: mixed_rice,
    item_price: "2100",
    item_category: "rice",
  },
  {
    item_id: "13",
    item_name: "Special Faluda",
    item_image: faluda,
    item_price: "650",
    item_category: "juice",
  },
  {
    item_id: "14",
    item_name: "Avacado",
    item_image: avacado,
    item_price: "600",
    item_category: "juice",
  },
  {
    item_id: "15",
    item_name: "Lime Juice",
    item_image: lime,
    item_price: "450",
    item_category: "juice",
  },
  {
    item_id: "16",
    item_name: "Papaya Juice",
    item_image: papaya,
    item_price: "550",
    item_category: "juice",
  },
  {
    item_id: "17",
    item_name: "Orange Juice",
    item_image: orange,
    item_price: "600",
    item_category: "juice",
  },
  {
    item_id: "18",
    item_name: "Watermelon",
    item_image: watermelon,
    item_price: "580",
    item_category: "juice",
  },
  {
    item_id: "19",
    item_name: "Cheese Kottu",
    item_image: cheeseKottu,
    item_price: "1950",
    item_category: "kottu",
  },
  {
    item_id: "20",
    item_name: "Fusion Special Kottu",
    item_image: fusionSpecialKottu ,
    item_price: "2350",
    item_category: "kottu",
  },
  {
    item_id: "21",
    item_name: "Prawn Kottu",
    item_image: prawnKottu,
    item_price: "1750",
    item_category: "kottu",
  },
  {
    item_id: "22",
    item_name: "Chicken Kottu",
    item_image: chickenKottu ,
    item_price: "2150",
    item_category: "kottu",
  },
  {
    item_id: "23",
    item_name: "Fusion Special Ice Cream",
    item_image:fusionSpecialIceCream ,
    item_price:"1550",
    item_category: "icecream",
  },
  {
    item_id: "24",
    item_name: "Ice Cream with Beries",
    item_image: iceCreamWithBeries,
    item_price:"1350",
    item_category: "icecream",
  },
  {
    item_id: "25",
    item_name: "Strawberry Special",
    item_image:strawberySpecialIceCream ,
    item_price:"1750",
    item_category: "icecream",
  },
  {
    item_id: "26",
    item_name: "Chicken Shawarma",
    item_image: chickenShawarma ,
    item_price:"1950",
    item_category: "shawarma",
  },
  {
    item_id: "27",
    item_name: "Beef Shawarma",
    item_image:beefShawarma ,
    item_price:"2150",
    item_category: "shawarma",
  },
  {
    item_id: "28",
    item_name: "Double Beef Burger",
    item_image:doubleBeefBurger ,
    item_price:"2450",
    item_category: "burger",
  },
  {
    item_id: "29",
    item_name: "Hot Spicy Burger",
    item_image: hotSpicyBurger,
    item_price:"1850",
    item_category: "burger",
  },
  {
    item_id: "30",
    item_name: "Beef Spicy Submarine",
    item_image: beefSpicySubmarine ,
    item_price:"2000",
    item_category: "submarine",
  },
  {
    item_id: "31",
    item_name: "Cheese Chicken Submarine",
    item_image:cheeseChickenSubmarine ,
    item_price:"2050",
    item_category: "submarine",
  },
];

export default menuItems;
