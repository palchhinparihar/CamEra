const products = [
  {
    name: "Canon EOS 200D Mark II",
    brand: "Canon",
    price: 64999,
    description: "24.1MP DSLR camera with Dual Pixel CMOS AF and 4K video recording.",
    imageUrl: "/images/canon-200d.jpg",
    stock: 5,
    category: "DSLR",
    rating: 4.5,
    numReviews: 12
  },
  {
    name: "Nikon Z50",
    brand: "Nikon",
    price: 78999,
    description: "20.9MP mirrorless camera with fast autofocus and 4K UHD video.",
    imageUrl: "/images/nikon-z50.jpg",
    stock: 3,
    category: "Mirrorless",
    rating: 4.2,
    numReviews: 8
  },
  {
    name: "Sony Alpha a6400",
    brand: "Sony",
    price: 81999,
    description: "24.2MP mirrorless camera with Real-time Eye AF and 4K video.",
    imageUrl: "/images/sony-a6400.jpg",
    stock: 4,
    category: "Mirrorless",
    rating: 4.6,
    numReviews: 15
  },
  {
    name: "Fujifilm X-T200",
    brand: "Fujifilm",
    price: 59999,
    description: "24.2MP mirrorless camera with vari-angle LCD and film simulation modes.",
    imageUrl: "/images/fujifilm-xt200.jpg",
    stock: 6,
    category: "Mirrorless",
    rating: 4.1,
    numReviews: 7
  },
  {
    name: "Canon EOS 90D",
    brand: "Canon",
    price: 99999,
    description: "32.5MP DSLR camera with Dual Pixel AF, 10fps, and 4K recording.",
    imageUrl: "/images/canon-90d.jpg",
    stock: 2,
    category: "DSLR",
    rating: 4.7,
    numReviews: 10
  },
  {
    name: "Nikon D5600",
    brand: "Nikon",
    price: 49999,
    description: "24.2MP DSLR with touchscreen, SnapBridge, and Full HD video.",
    imageUrl: "/images/nikon-d5600.jpg",
    stock: 7,
    category: "DSLR",
    rating: 4.0,
    numReviews: 9
  },
  {
    name: "Panasonic Lumix G7",
    brand: "Panasonic",
    price: 54999,
    description: "16MP mirrorless camera with 4K video and fast autofocus.",
    imageUrl: "/images/panasonic-g7.jpg",
    stock: 4,
    category: "Mirrorless",
    rating: 4.3,
    numReviews: 6
  },
  {
    name: "Canon EOS M50 Mark II",
    brand: "Canon",
    price: 58999,
    description: "24.1MP mirrorless camera with vertical video and 4K recording.",
    imageUrl: "/images/canon-m50.jpg",
    stock: 5,
    category: "Mirrorless",
    rating: 4.4,
    numReviews: 11
  },
  {
    name: "Sony Alpha a7 III",
    brand: "Sony",
    price: 139999,
    description: "24.2MP full-frame mirrorless camera with 5-axis stabilization.",
    imageUrl: "/images/sony-a7iii.jpg",
    stock: 2,
    category: "Full Frame",
    rating: 4.8,
    numReviews: 13
  },
  {
    name: "Nikon Z6 II",
    brand: "Nikon",
    price: 165999,
    description: "24.5MP full-frame mirrorless camera with dual processors and 4K 60p.",
    imageUrl: "/images/nikon-z6ii.jpg",
    stock: 3,
    category: "Full Frame",
    rating: 4.7,
    numReviews: 14
  },
  {
    name: "Kodak PixPro AZ252",
    brand: "Kodak",
    price: 14999,
    description: "16MP point-and-shoot camera with 25x optical zoom and HD video.",
    imageUrl: "/images/kodak-az252.jpg",
    stock: 10,
    category: "Point and Shoot",
    rating: 3.3,
    numReviews: 5
  },
  {
    name: "Sony Cyber-shot DSC-W800",
    brand: "Sony",
    price: 8999,
    description: "20.1MP compact camera with 5x zoom and 720p video.",
    imageUrl: "/images/sony-w800.jpg",
    stock: 12,
    category: "Compact",
    rating: 3.6,
    numReviews: 7
  },
  {
    name: "Canon IXUS 185",
    brand: "Canon",
    price: 7999,
    description: "20MP digital camera with 8x optical zoom and HD video.",
    imageUrl: "/images/canon-ixus185.jpg",
    stock: 9,
    category: "Compact",
    rating: 2.9,
    numReviews: 6
  },
  {
    name: "Vivitar VXX14",
    brand: "Vivitar",
    price: 4999,
    description: "Affordable 14MP digital camera with 4x zoom and video capture.",
    imageUrl: "/images/vivitar-vxx14.jpg",
    stock: 15,
    category: "Digital",
    rating: 2.5,
    numReviews: 4
  },
  {
    name: "Polaroid Snap Touch",
    brand: "Polaroid",
    price: 11999,
    description: "Instant digital camera with 13MP and ZINK printing technology.",
    imageUrl: "/images/polaroid-snap.jpg",
    stock: 8,
    category: "Instant",
    rating: 1.2,
    numReviews: 5
  }
];

export default products;
