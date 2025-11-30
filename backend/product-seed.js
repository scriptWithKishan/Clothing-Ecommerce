const dotenv = require("dotenv")
const Product = require("./models/Product")

dotenv.config()

const connectDB = require("./config/db")

const products = [
  {
    name: "Men Formal Pant | Green",
    description: "Elevate your professional wardrobe with these sophisticated green formal pants. Crafted from premium fabric, they offer exceptional comfort and a tailored fit. Perfect for office wear and business meetings, ensuring you look sharp and confident.",
    price: 2000,
    image: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1764509068/men-pant-1_rt7sr9.png",
    category: "Men",
    size: "L",
    stock: 304
  },
  {
    name: "Men Formal Shoes | Brown",
    description: "Classic brown formal shoes designed for the modern gentleman. These premium leather shoes feature excellent craftsmanship and timeless style. Ideal for formal occasions, office wear, and special events, providing both elegance and lasting comfort throughout the day.",
    price: 1500,
    image: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1764509066/men-shoes-4_bpeacz.png",
    category: "Men",
    size: "M",
    stock: 423
  },
  {
    name: "Women Formal Shoes | Black",
    description: "Sophisticated black formal shoes that combine elegance with comfort. Perfect for professional settings and formal events, these shoes feature a sleek design and quality construction. Step confidently into any business meeting or special occasion with these versatile classics.",
    price: 2300,
    image: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1764509066/women-shoe-3_dd8tbf.png",
    category: "Women",
    size: "S",
    stock: 483
  },
  {
    name: "Women Casual Shirt | White",
    description: "Versatile white casual shirt perfect for everyday wear. Made from breathable, high-quality fabric that ensures all-day comfort. Pair it with jeans or skirts for a relaxed yet polished look. A wardrobe essential that effortlessly transitions from casual outings to semi-formal settings.",
    price: 1400,
    image: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1764509065/women-shirt-1_cn397s.png",
    category: "Women",
    size: "M",
    stock: 982
  },
  {
    name: "Women Stylish Shoes | Blue",
    description: "Make a bold fashion statement with these stunning blue stylish shoes. Featuring contemporary design and superior comfort, they're perfect for fashion-forward women. Whether for parties, casual outings, or special occasions, these shoes add a vibrant pop of color to any outfit.",
    price: 2800,
    image: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1764509065/women-shoe-4_o5g3ga.png",
    category: "Women",
    size: "L",
    stock: 239
  },
  {
    name: "Women Stylish Shirt | Green",
    description: "Trendy green shirt that brings fresh style to your wardrobe. Designed with modern cuts and premium fabric, it offers both comfort and fashion appeal. Perfect for casual gatherings, weekend brunches, or creative work environments where you want to express your unique style.",
    price: 1900,
    image: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1764509063/women-shirt-2_qgv4vq.png",
    category: "Women",
    size: "M",
    stock: 328
  },
  {
    name: "Women Casual Shirt | Blue",
    description: "Chic blue casual shirt that combines comfort with contemporary style. Made from soft, breathable material perfect for all-day wear. Versatile enough to dress up or down, making it ideal for various occasions from coffee dates to casual Friday at the office.",
    price: 2300,
    image: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1764509062/women-shirt-4_im8qgm.png",
    category: "Women",
    size: "S",
    stock: 201
  },
  {
    name: "Women Stylish Shirt | Blue",
    description: "Contemporary blue shirt designed for the fashion-conscious woman. Features a flattering fit and quality construction that ensures durability. Perfect for creating effortlessly stylish looks, whether paired with jeans for casual outings or dressed up with accessories for evening events.",
    price: 2000,
    image: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1764509060/women-shirt-3_nj201w.png",
    category: "Women",
    size: "M",
    stock: 111
  },
  {
    name: "Men Casual Shirt | Blue",
    description: "Comfortable blue casual shirt perfect for relaxed everyday wear. Crafted from premium fabric that's both soft and durable. Ideal for weekend outings, casual gatherings, or laid-back work environments. Easy to style and maintain, making it a practical wardrobe staple.",
    price: 900,
    image: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1764509058/men-shirt-2_nnnltc.png",
    category: "Men",
    size: "XL",
    stock: 124
  },
  {
    name: "Women Stylish Pant | Green",
    description: "Fashion-forward green pants that add a fresh twist to your wardrobe. Designed with a modern silhouette and comfortable fit, they're perfect for creating trendy outfits. Versatile enough for both casual and semi-formal occasions, offering style and comfort in equal measure.",
    price: 1300,
    image: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1764509056/women-pant-2_nghnqo.png",
    category: "Women",
    size: "M",
    stock: 737
  },
  {
    name: "Men Stylish Shirt | Red Blue",
    description: "Eye-catching red and blue shirt that makes a bold style statement. Featuring unique color combination and modern design, it's perfect for men who aren't afraid to stand out. Ideal for parties, casual events, or adding personality to your everyday wardrobe.",
    price: 1800,
    image: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1764509055/men-shirt-1_bedn5f.png",
    category: "Men",
    size: "M",
    stock: 382
  },
  {
    name: "Men Casual Shirt | Gray",
    description: "Versatile gray casual shirt that's a must-have for every man's wardrobe. The neutral color pairs effortlessly with any outfit, while the quality fabric ensures lasting comfort. Perfect for casual Fridays, weekend activities, or relaxed social gatherings with friends and family.",
    price: 1200,
    image: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1764509051/men-shirt-3_kmlc6r.png",
    category: "Men",
    size: "L",
    stock: 893
  },
  {
    name: "Women Stylish Pant | Cream",
    description: "Elegant cream-colored pants that exude sophistication and style. The soft, neutral tone makes them incredibly versatile and easy to pair with various tops. Perfect for creating polished looks for work, brunches, or evening outings while maintaining exceptional comfort throughout the day.",
    price: 1800,
    image: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1764509046/women-pant-3_hnl3iq.png",
    category: "Women",
    size: "S",
    stock: 323
  },
  {
    name: "Men Stylish Shirt | Green",
    description: "Premium green shirt that combines style with sophistication. Made from high-quality fabric with attention to detail in every stitch. Perfect for fashion-conscious men who appreciate quality and want to make a refined statement at social events or upscale casual occasions.",
    price: 2800,
    image: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1764509045/men-shirt-4_q2ouib.png",
    category: "Men",
    size: "M",
    stock: 942
  },
  {
    name: "Women Stylish Pant | Blue",
    description: "Trendy blue pants designed for the modern woman on the go. Featuring a comfortable fit and contemporary style, they're perfect for creating versatile outfits. Whether for work, casual outings, or social events, these pants offer both fashion and functionality in one package.",
    price: 1100,
    image: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1764509039/women-pant-4_l4iyaq.png",
    category: "Women",
    size: "L",
    stock: 130
  },
  {
    name: "Women Casual Shoes | White",
    description: "Pristine white casual shoes that are both stylish and comfortable. Perfect for everyday wear, these shoes feature a clean design that complements any casual outfit. Ideal for walking, shopping, or casual meetups, providing all-day comfort without compromising on style and elegance.",
    price: 3000,
    image: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1764509035/women-shoe-1_gmcieo.png",
    category: "Women",
    size: "S",
    stock: 143
  },
  {
    name: "Men Casual Shoes | White",
    description: "Classic white casual shoes that never go out of style. Combining comfort with versatile design, they're perfect for everyday wear and various casual occasions. Whether you're running errands or meeting friends, these shoes provide the perfect blend of style and practicality.",
    price: 2800,
    image: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1764509035/men-shoes-1_lsh7os.png",
    category: "Men",
    size: "XL",
    stock: 483
  },
  {
    name: "Women Casual Pant | White",
    description: "Crisp white casual pants that bring freshness to your wardrobe. Made from comfortable, easy-care fabric that maintains its pristine look. Perfect for summer outings, casual gatherings, or creating clean, minimalist looks. A versatile piece that pairs beautifully with colorful tops.",
    price: 2000,
    image: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1764509030/women-pant-5_fqoryl.png",
    category: "Women",
    size: "M",
    stock: 482
  },
  {
    name: "Men Stylish Pant | Blue",
    description: "Contemporary blue pants designed for the style-savvy man. Featuring modern cuts and premium fabric, they offer both comfort and fashion appeal. Perfect for smart-casual occasions, creative workplaces, or weekend outings where you want to look put-together yet relaxed and approachable.",
    price: 2200,
    image: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1764509029/men-pant-2_zh0mba.png",
    category: "Men",
    size: "L",
    stock: 282
  },
  {
    name: "Men Stylish Shoes | White",
    description: "Sophisticated white shoes that add a touch of elegance to any outfit. Crafted with attention to detail and quality materials, they're perfect for men who appreciate refined style. Ideal for smart-casual events, dates, or occasions where you want to make a lasting impression.",
    price: 2500,
    image: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1764509028/men-shoes-2_llgqze.png",
    category: "Men",
    size: "M",
    stock: 392
  },
  {
    name: "Men Stylish Shoes | Blue",
    description: "Bold blue shoes that showcase your confident style. Featuring contemporary design and comfortable construction, they're perfect for making a statement. Whether for casual outings, creative work environments, or social gatherings, these shoes help you stand out with sophisticated flair and personality.",
    price: 1000,
    image: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1764509023/men-shoes-3_eqnohl.png",
    category: "Men",
    size: "S",
    stock: 923
  },
  {
    name: "Men Stylish Pant | White",
    description: "Clean white pants that offer a fresh, modern look. Made from quality fabric with excellent durability and comfort. Perfect for summer events, casual gatherings, or creating sharp, minimalist outfits. Easy to style and maintain, making them a practical addition to any wardrobe.",
    price: 800,
    image: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1764509021/men-pant-4_qhs6rz.png",
    category: "Men",
    size: "M",
    stock: 593
  },
  {
    name: "Men Stylish Pant | Blue",
    description: "Versatile blue pants that combine style with everyday practicality. Designed with a comfortable fit and durable construction, they're perfect for various occasions. From casual Fridays to weekend adventures, these pants offer the flexibility to dress up or down while maintaining a polished appearance.",
    price: 2000,
    image: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1764509018/men-pant-3_tajhyi.png",
    category: "Men",
    size: "M",
    stock: 733
  },
  {
    name: "Women Stylish Pant | Red",
    description: "Vibrant red pants that make a bold fashion statement. Perfect for confident women who love to express their personality through clothing. These eye-catching pants are ideal for parties, special occasions, or adding a pop of color to your everyday wardrobe with undeniable style.",
    price: 1500,
    image: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1764509017/women-pant-1_wytl6u.png",
    category: "Women",
    size: "XL",
    stock: 622
  },
  {
    name: "Women Casual Shoes | Red",
    description: "Striking red casual shoes that add energy to any outfit. Combining comfort with bold style, they're perfect for women who want to make an impression. Ideal for casual outings, shopping trips, or social gatherings where you want your footwear to be a conversation starter.",
    price: 1500,
    image: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1764509012/women-shoe-2_imlonj.png",
    category: "Women",
    size: "M",
    stock: 888
  }
]

const seed = async () => {
  try {
    await connectDB()

    await Product.deleteMany({})
    console.log("Existing products cleared")

    await Product.insertMany(products)
    console.log(`Successfully seeded ${products.length} products`)

    process.exit(0)
  } catch (error) {
    console.error("Error seeding products:", error.message)
    process.exit(1)
  }
}

seed()