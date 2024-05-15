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
    { title: "Gifts for Dad", image: "/images/gifts-for-dad.jpeg" },
    { title: "Birthday Gifts", image: "/images/birthday-gifts.jpeg" },
    { title: "Anniversary Gifts", image: "/images/anniversary-gifts.jpeg" },
    {
      title: "Wedding & Engagement Gifts",
      image: "/images/wedding-gifts.jpeg",
    },
    { title: "Home Gifts", image: "/images/home-gifts.jpeg" },
  ];

  return (
    <div>
      <h4>Stuff</h4>
      <div className="">
        <SubcategoryCard subcategories={subcategories} />
      </div>
      <h2>Shop Popular Categories</h2>
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
