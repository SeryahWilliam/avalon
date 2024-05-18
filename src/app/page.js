import { categories } from "./categoryList";
import CategoryCard from "./components/CategoryCard";
import SubcategoryCard from "./components/SubcategoryCard";
import CarouselComponent from "./components/Carousel";
import images from "./carouselList";
import ProtectedRoute from "./components/ProtectedRoute";

export default function Home() {
  const subcategories = [
    {
      display: "Bath & Bedding",
      title: "bath_bedding",
      image: "/images/bath.jpeg",
    },
    { display: "Home Decor", title: "home_decor", image: "/images/decor.jpeg" },
    {
      display: "Electronics",
      title: "electronics",
      image: "/images/elec.webp",
    },
    {
      display: "Accessories",
      title: "accessories",
      image: "/images/accessories.jpeg",
    },
    { display: "Shoes", title: "shoes", image: "/images/shoes.webp" },
    { display: "Kids", title: "kids", image: "/images/kids.jpeg" },
  ];

  return (
    <ProtectedRoute>
      <div className="m-8 flex flex-col justify-center">
        <h2 className="w-full text-center text-3xl text-gray-800 leading-none tracking-tight mb-4">
          Discover Unique Treasures from Independent Sellers!
        </h2>
        <div className="mb-12">
          <SubcategoryCard subcategories={subcategories} />
        </div>
        <CarouselComponent images={images} />
        <h2 className="w-full text-center mb-4 text-center text-2xl text-gray-800 leading-none tracking-tight font-semibold">
          Shop Popular Categories
        </h2>
        <div className="flex flex-row flex-wrap">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              img={category.image}
              display={category.display}
            />
          ))}
        </div>
      </div>
      //{" "}
    </ProtectedRoute>
  );
}
