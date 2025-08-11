import image1 from './1.jpg' 
import image2 from './2.jpg'
import image3 from './3.jpg'
import image4 from './4.jpg'
import image5 from './5.jpg'
import image6 from './6.jpg'
import image7 from './7.jpg'
import image8 from './8.jpg'
import image9 from './9.jpg'
import image10 from './10.jpg'
import image11 from './11.jpg'
import image12 from './12.jpg'
import image13 from './13.jpg'
import image14 from './14.jpg'
import image15 from './15.jpg'
import image16 from './16.jpg'
import image17 from './17.jpg'
import image18 from './18.jpg'
import image19 from './19.jpg'
import image20 from './20.jpg'
import image21 from './21.jpg'
import image22 from './22.jpg'
import image23 from './23.jpg'
import image24 from './24.png'
import image25 from './25.jpg'
import image26 from './26.jpg'
import image27 from './27.jpg'
import image28 from './28.jpg'
import image29 from './29.jpg'


const all_products = [
  {
    id: 1,
    name: "Men Watch",
    image: image1,
    category: "men",
    old_price: 24.36,
    new_price: 10.96,
    description:"Men Watch Water Diamond Luxury Night Glow Double Calendar Quartz Movement 41mm Blue Gold Stainless Steel Fashion Business Watch ",
    url:"https://s.click.aliexpress.com/e/_oFhUPWn"

  },
  {
    id: 2,
    name: "Necklace",
    category: "kids",
    image: image2,
    old_price: 1.72,
    new_price: 0.81,
    description:"LATS 20-60cm Silver Plated 6mm Full Sideways Necklace for Woman Men Gold Color 18/20/24 Inch Chain Fashion Wedding Jewelry Gift",
    url:"https://s.click.aliexpress.com/e/_ool6qPl"
  },
  {
    id: 3,
    name: "Mouse",
    category: "kids",
    image: image3,
    old_price: 40.00,
    new_price: 25.00,
    description:"INPHIC F1 2.4G Wireless Mouse 500mAh Ergonomic Rechargeable Power Display Office Home Silent Laptop Desktop Computer Universal",
    url:"https://s.click.aliexpress.com/e/_okVXhqP"
  },
  {
    id: 4,
    name: " Women panties",
    category: "womens",
    image: image4,
    old_price: 4.71,
    new_price: 3.53,
    description:"Cotton Women's High Waist Tummy Control Panties  Antibacterial Breathable Plus Size Postpartum Shorts Infant-Safe Comfort",
    url:"https://s.click.aliexpress.com/e/_onLqHXZ"
  },
  {
    id: 5,
    name: "shoes",
    category: "men",
    image: image5,
    old_price: 42.36,
    new_price: 16.15,
    description:"2025 men's summer sneakers Fashion casual sneaker flat Breathable men's shoes canvas casual free shipping shoes",
    url:"https://s.click.aliexpress.com/e/_oFlJEf9"
  },
 {
    id: 6,
    name: "Hair Brush",
    category: "womens",
    image: image6,
    old_price: 2.04,
    new_price: 0.99,
    description:"Oval Double Sides Magic Twist Hair Brush Sponge Brush For Natural Afro Coil Wave Dread Sponge Brushes Hair Braids Braiding Hair",
    url:"https://s.click.aliexpress.com/e/_omiur8b"
  }
  ,  {
    id: 7,
    name: "Smart Watch",
    category: "men",
    image: image7,
    old_price: 20.75,
    new_price: 7.79,
    description:"2024 T900 Ultra 2 Smart Watch Men 49mm Series 8 2.3 AMOLED Screen NFC Compass Waterproof For Apple Watch IWO Ultra 8 Smartwatch",
    url:"https://s.click.aliexpress.com/e/_omip3OX"
  },
    {
    id: 8,
    name: "AirPod",
    category: "men",
    image: image8,
    old_price: 22.15,
    new_price: 8.13,
    description:"Choice Lenovo GM2 Pro TWS Wireless Headphones Earphone Bluetooth-compatible 5.3 Waterproof Headset with Mic for Xiaomi iPhone"
  },
    {
    id: 10,
    name: "Cutter",
    category: "womens",
    image: image10,
    old_price: 16.84,
    new_price: 8.42,
    description:"Design of adjustable cutter head with USB charging for electric hair clipper hair and beard trimming",
    url:" https://s.click.aliexpress.com/e/_oowVyq3"
  },  
  {
    id: 9,
    name: "Lte Router",
    category: "womens",
    image: image9,
    old_price: 32.60,
    new_price: 15.65,
    description:"4G Lte Router Wireless Wifi 2100mAh Mobile Hotspot with SIM Card Slot Hotspot Pocket WIFI 150mbps For Outdoor Home Office Travel",
    url:"https://s.click.aliexpress.com/e/_onuTiPz"
  },
    {
    id: 11,
    name: "Microphone",
    category: "womens",
    image: image11,
    old_price: 6.72,
    new_price: 6.16,
    description:"Basix Wireless Lavalier Microphone Audio Recording Mini Replaceable Windproof Wool Microphone for iPhone16 Shoot vlog YouTube",
    url:"https://s.click.aliexpress.com/e/_ooP9qO7"
  },
    {
    id: 12,
    name: "USB HUB",
    category: "womens",
    image: image12,
    old_price: 6.78,
    new_price: 4.07,
    description:"8 in 2 USB HUB C type-c HUB USB C to USB 3.0 HDTV-Compatible Dock for MacBook Pro For Nintendo Switch USB-C Type C 3.0 Splitter",
    url:"https://s.click.aliexpress.com/e/_oBo9xbp"
  },
    {
    id: 13,

    name: "AirPod",
    category: "womens",
    image: image13,
    old_price: 24.12,
    new_price: 8.12,
    description:"Lenovo GM2 Pro Bluetooth 5.3 Earphones Sports Headset Wireless In-Ear Gaming Low Latency Dual Mode Music Headphones New",
    url:"https://s.click.aliexpress.com/e/_oC9Z0F9"
  },
  {
    id: 14,
    name: "AirPod",
    category: "womens",
    image: image14,
    old_price: 25.67,
    new_price: 11.55,
    description:"2025 Original Lenovo LP48 TWS Earphone Wireless Bluetooth 5.4 Headset Half In Ear Noise Reduction Free EarBuds For Huawei iPhone",
    url:"https://s.click.aliexpress.com/e/_oEFA6eT"
  },
 {
  id: 15,
  name: "shoes",
  category: "kids",
  image: image15,
  old_price: 43.88,
  new_price: 21.94,
  description: "Men's casual shoes, fashionable and versatile sports shoes, breathable running shoes, outdoor walking training tennis shoes",
  url: "https://s.click.aliexpress.com/e/_ol0vTUr"
 },
 {
  id: 16,
  name: "Face Cleansing Brush",
  category: "kids",
  image: image16,
  old_price: 0.81,
  new_price: 0.54,
  description: "Silicone Face Cleansing Brush Facial Deep Pore Skin Care Scrub Cleanser Tool New Mini Beauty Soft Deep Cleaning Exfoliator",
  url: "https://s.click.aliexpress.com/e/_oDiAuef "
 },
 {
  id: 17,
  name: "Men Watches",
  category: "men",
  image: image17,
  old_price: 1.86,
  new_price: 0.99,
  description: "4/1pcs Men Watches Set Luxury Fashion Design Leather Watch Quartz Men Watch Clock Gift Montre Homme Relogio Masculino（no Box）",
  url: " https://s.click.aliexpress.com/e/_ol0aR6x"
 },
 {
  id: 18,
  name: "Portable Juice",
  category: "kids",
  image: image18,
  old_price: 21.40,
  new_price: 8.99,
  description: "Portable Juicer Cup 6 Blade Blender Household Fruit Juicer Cup USB Rechargeable Double Cup Multifunction Electric Juicer",
  url: "https://s.click.aliexpress.com/e/_olWvAP1"
 },
 {
  id: 19,
  name: "Coffee Grinder",
  category: "mens",
  image: image19,
  old_price: 26.64,
  new_price: 7.89,
  description: "2024 New Portable Electric Coffee Grinder Household Small Grain Grinder Stainless Steel Nut Bean Grain Grinding Mixer",
  url: "https://s.click.aliexpress.com/e/_oEAn9IT"
 },
 {
  id: 20,
  name: "Juice Machine",
  category: "womens",
  image: image20,
  old_price: 47.38,
  new_price: 18.95,
  description: "Extractor Fully Automatic Fruit Household Juicer Portable Juice Machine Residue Separation Bidirectional Spiral Fruit Juicer Cup",
  url: "https://s.click.aliexpress.com/e/_okPSxFN"
 },
 {
  id: 21,
  name: "Toothbrush",
  category: "kids",
  image: image21,
  old_price: 33.37,
  new_price: 12.85,
  description: "Electric Ultrasonic Toothbrush Six Speed Mode Home Soft Hair USB Charging Waterproof Adult Tooth Cleaner Automatic Couple Set",
  url: "https://s.click.aliexpress.com/e/_oBSJZa7"
 }, 
 {
  id: 22,
  name: "realfit AirPod",
  category: "men",
  image: image22,
  old_price: 20.33,
  new_price: 9.76,
  description: "Realfit F3 ANC Active Noice Cancellation Bluetooth Earphones ENC Call HIFI Stereo Superb Bass Wireless Earbuds Sport Gaming",
  url: "https://s.click.aliexpress.com/e/_oCyJxIx"
 },
 {
  id: 23,
  name: "Shaver ",
  category: "men",
  image: image23,
  old_price: 13.30,
  new_price: 10.80,
  description: "ZOZEN Electric Shaver Washable Rechargeable Electric Razor Shaving Machine for Men Body Hair Beard Trimmer Wet-Dry Use Washable",
  url: " https://s.click.aliexpress.com/e/_oEtYvSb"
 },
  {
  id: 24,
  name: "MIni Folding Hairdryer",
  category: "men",
  image: image24,
  old_price: 29.79,
  new_price: 9.54,
  description: "MIni Folding Hairdryer 750W with Carrying Bag Hot Air Anion Hair Care for Home Travel Hair Dryer Dormitory Blow Drier 220V-240V",
  url: "https://s.click.aliexpress.com/e/_oDAHX9t"
 },
  {
  id: 25,
  name: "Smart Watch ",
  category: "men",
  image: image25,
  old_price: 15.52,
  new_price: 6.98,
  description: "2025 Smart Watch Android IOS Phone 2.01 Inch Color Screen Bluetooth Answer Call Fitness Watches Tracker Smartwatch Women Men",
  url: "https://s.click.aliexpress.com/e/_oBx9dJ5"
 },
  {
  id: 26,
  name: "Beard For Man Shaver",
  category: "men",
  image: image26,
  old_price: 24.26,
  new_price: 12.13,
  description: "Trimmer Beard For Man Shaver homme Razor Beard Shaper Armpit Chest Hair Trimmer Professional Barber LED Display Re-Battery",
  url: "https://s.click.aliexpress.com/e/_oFolaZV"
 },
  {
  id: 27,
  name: "Portable Blender",
  category: "womens",
  image: image27,
  old_price: 35.17,
  new_price: 17.59,
  description: "New Portable Blender 600ML Electric Juicer Fruit Mixers 4000mAh USB Rechargeable Mini Smoothie Blender Orange Juicer Machine",
  url: " https://s.click.aliexpress.com/e/_opmuuZV"
 },
   {
  id: 28,
  name: "watch + airpod",
  category: "womens",
  image: image28,
  old_price: 31.30,
  new_price: 10.95,
  description: "LEMFO LT10 Smart Watch 2024 Android Gift Bluetooth Call Smartwatch 2024 Touch Dial Music Fitness Tracker Sports Watches",
  url: " https://s.click.aliexpress.com/e/_okuWfV1"
 },
   {
  id: 29,
  name: "airpod",
  category: "womens",
  image: image29,
  old_price: 22.21,
  new_price: 11.70,
  description: "Game Bluetooth Earphones Noise Reduction HiFi Stereo Music Sport Earbuds Choice",
  url: "  https://s.click.aliexpress.com/e/_omrHZQj"
 },
];

export default all_products;
