import { categories } from "./categoryList";
import CategoryCard from "./components/CategoryCard";
import SubcategoryCard from "./components/SubcategoryCard";

export default function Home() {
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
