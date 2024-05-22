const sampleCategoryItems = [
  {
    _id: "1",
    name: "iPhone 12",
    description:
      "Latest model smartphone with high-resolution camera and fast processor.",
    price: "799.99",
    displayImage:
      "https://st2.depositphotos.com/12549814/42305/i/450/depositphotos_423055122-stock-photo-italy-01-november-2020-iphone.jpg",
    rating: 4.5,
  },
  {
    _id: "2",
    name: "HP Laptop",
    description: "Powerful laptop with 16GB RAM and 512GB SSD.",
    price: "999.99",
    displayImage:
      "https://media.istockphoto.com/id/519518538/photo/windows-8-1-on-hp-pavilion-ultrabook.jpg?s=612x612&w=0&k=20&c=-F78iNgYxBTfB6kojv442awrNzjoWB-XYwDzmoMvdoo=",
    rating: 4.8,
  },
  {
    _id: "3",
    name: "Apple Watch SE",
    description: "Wearable smartwatch with fitness tracking and notifications.",
    price: "199.99",
    displayImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJUOVSwt4VFL6pj5G1Wc0QUB-SnyDId9owu5SWQGwN-A&s",
    rating: 4.3,
  },
  {
    _id: "4",
    name: "Beats Bluetooth Headphones",
    description:
      "Noise-cancelling Bluetooth headphones with long battery life.",
    price: "149.99",
    displayImage:
      "https://m.media-amazon.com/images/I/61QYYjm4KhL._AC_UF894,1000_QL80_.jpg",
    rating: 4.7,
  },
  {
    _id: "5",
    name: "iPad 10th gen",
    description: "Apple iPad 10th generation",
    price: "599.99",
    displayImage:
      "https://www.tccq.com/image/cache/catalog/1101874/iPad-10th-Gen-10-9-inch-Wi-Fi-64GB-Blue-MPQ13AB-A-in-Qatar-600x600.jpg",
    rating: 4.6,
  },
  {
    _id: "6",
    name: "Samsung Galaxy Buds",
    description: "Compact and ergonomic wireless earbuds with charging case.",
    price: "129.99",
    displayImage:
      "https://www.courtsmammouth.mu/69048-large_default/samsung-galaxy-buds-pro-2-purple.jpg",
    rating: 4.4,
  },
  {
    _id: "7",
    name: "Samsung Tablet",
    description:
      "10-inch tablet with high-resolution display and powerful processor.",
    price: "399.99",
    displayImage:
      "https://i5.walmartimages.com/asr/cfd1b8a5-02d9-4d57-9ded-a49c59b8e45d.33a54942593a248089ed72dabedbe90a.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    rating: 4.5,
  },
  {
    _id: "8",
    name: "Digital Camera",
    description:
      "High-resolution digital camera with optical zoom and image stabilization.",
    price: "549.99",
    displayImage:
      "https://amateurphotographer.com/wp-content/uploads/sites/7/2023/09/Nikon-D90.jpg?w=1024",
    rating: 4.6,
  },
  {
    _id: "9",
    name: "Nintendo Switch",
    description:
      "Next-gen gaming console with 4K support and large game library.",
    price: "499.99",
    displayImage:
      "https://media.gamestop.com/i/gamestop/11149259_ALT01_visnav.webp",
    rating: 4.9,
  },
  {
    _id: "10",
    name: "Bluetooth Speaker",
    description:
      "Portable Bluetooth speaker with powerful sound and long battery life.",
    price: "99.99",
    displayImage:
      "https://cdn.thewirecutter.com/wp-content/media/2022/11/portablebluetoothspeakers-2048px-3047.jpg",
    rating: 4.2,
  },
  {
    _id: "11",
    name: "Go Pro",
    description:
      "Waterproof action camera with 4K recording and wide-angle lens.",
    price: "299.99",
    displayImage:
      "https://static.gopro.com/assets/blta2b8522e5372af40/blt741c2a686796c4bf/61b7c3bf1bdbe25709ba76a9/GoPro_News_HERO10_Black.jpg",
    rating: 4.4,
  },
  {
    _id: "12",
    name: "Smart Home Hub",
    description: "Smart home hub with voice control and automation features.",
    price: "129.99",
    displayImage:
      "https://homesmart.sg/wp-content/uploads/2021/07/Apple-Home-Setup-Singapore.jpg",
    rating: 4.3,
  },
  {
    _id: "13",
    name: "TP Link Wireless Router",
    description: "High-speed wireless router with dual-band support.",
    price: "89.99",
    displayImage:
      "https://i.pcmag.com/imagery/reviews/04XmHNXc3c3GXXLimmqLsw4-1..v1609859128.png",
    rating: 4.1,
  },
  {
    _id: "14",
    name: "Fitbit Sense",
    description: "Waterproof fitness tracker with heart rate monitor and GPS.",
    price: "99.99",
    displayImage:
      "https://assets.mofoprod.net/network/images/Fitbit-Sense_s65oq6_SUeYs3d.original.jpg",
    rating: 4.2,
  },
  {
    _id: "15",
    name: "Smart Light Bulbs",
    description: "Set of smart light bulbs with color and brightness control.",
    price: "49.99",
    displayImage: "https://m.media-amazon.com/images/I/613oRgqZiFL.jpg",
    rating: 4.5,
  },
  {
    _id: "16",
    name: "VR Headset",
    description: "Virtual reality headset with immersive 3D experience.",
    price: "399.99",
    displayImage:
      "https://i.pcmag.com/imagery/roundups/02Qp8NssQCHrqFVFEOXnkxr-28..v1623684908.jpg",
    rating: 4.6,
  },
  {
    _id: "17",
    name: "Drone",
    description: "Quadcopter drone with HD camera and remote control.",
    price: "299.99",
    displayImage:
      "https://media.wired.com/photos/65fdfc40f9ff6cdb8f90f943/master/w_1280%2Cc_limit/DJI-Air-3-Offwhite-Background-SOURCE-DJI.jpg",
    rating: 4.3,
  },
  {
    _id: "18",
    name: "E-Reader",
    description:
      "E-reader with high-resolution display and adjustable brightness.",
    price: "129.99",
    displayImage:
      "https://cdn.thewirecutter.com/wp-content/media/2023/07/ebook-reader-2048px-0061.jpg",
    rating: 4.4,
  },
  {
    _id: "19",
    name: "Portable Charger",
    description: "High-capacity portable charger with fast charging support.",
    price: "39.99",
    displayImage:
      "https://www.travelandleisure.com/thmb/eIzZNIMJ76dCqn8p2R_YH2JdRas=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Best-Portable-Chargers-of-2024-tout-bd0829ba3e8b404db7b89ea04d10ed9a.jpg",
    rating: 4.6,
  },
  {
    _id: "20",
    name: "Mechanical Keyboard",
    description: "Mechanical keyboard with customizable RGB lighting.",
    price: "89.99",
    displayImage:
      "https://m.media-amazon.com/images/I/71NMtTQkYUL._AC_UF894,1000_QL80_.jpg",
    rating: 4.7,
  },
  {
    _id: "21",
    name: "Smart Thermostat",
    description:
      "Smart thermostat with remote control and energy-saving features.",
    price: "199.99",
    displayImage:
      "https://cdn.thewirecutter.com/wp-content/media/2022/11/smartthermostats-2048px-3105.jpg",
    rating: 4.5,
  },
  {
    _id: "22",
    name: "Electric Scooter",
    description:
      "Foldable electric scooter with long battery life and fast speed.",
    price: "499.99",
    displayImage:
      "https://ridejetson.com/cdn/shop/products/JRACER-BLK_02.png?v=1630503739",
    rating: 4.8,
  },
  {
    _id: "23",
    name: "Dash Cam",
    description:
      "High-definition dash cam with night vision and loop recording.",
    price: "69.99",
    displayImage: "https://m.media-amazon.com/images/I/71ufodvAwhL.jpg",
    rating: 4.3,
  },
  {
    _id: "24",
    name: "Smart Doorbell",
    description: "Smart doorbell with video recording and two-way audio.",
    price: "149.99",
    displayImage:
      "https://m.media-amazon.com/images/I/61Q7MwZvUsL._AC_UF1000,1000_QL80_.jpg",
    rating: 4.5,
  },
];

export default sampleCategoryItems;
