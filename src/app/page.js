import CategoryCard from "./components/CategoryCard";
import SubcategoryCard from "./components/SubcategoryCard";

export default function Home() {
  const categories = [
    { title: "Clothing", image: "/images/clothes1.jpeg" },
    { title: "Beauty", image: "/images/beauty.jpeg" },
    { title: "Appliances", image: "/images/appliances2.jpeg" },
    { title: "Gifts for Him", image: "/images/him.webp" },
    { title: "Gifts for Her", image: "/images/her.jpeg" },
    { title: "Wedding Gifts", image: "/images/wedding.jpg" },
  ];

  const subcategories = [
    { title: "Bath & Bedding", image: "/images/bath.jpeg" },
    { title: "Home Decor", image: "/images/decor.jpeg" },
    { title: "Electronics", image: "/images/elec.webp" },
    { title: "Accessories", image: "/images/accessories.jpeg" },
    { title: "Shoes", image: "/images/shoes.webp" },
    { title: "Kids", image: "/images/kids.jpeg" },
  ];

  return (
    <div className="m-8 flex flex-col justify-center">
      <h2 className="w-full text-center text-3xl text-gray-800 leading-none tracking-tight">
        Discover Unique Treasures from Independent Sellers!
      </h2>
      <div className="mb-12">
        <SubcategoryCard subcategories={subcategories} />
      </div>
      <h2 className="w-full text-center mb-4 text-center text-3xl text-gray-800 leading-none tracking-tight font-semibold">
        Shop Popular Categories
      </h2>
      <div className="flex flex-row flex-wrap">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            img={category.image}
          />
        ))}
      </div>
    </div>
  );
}
