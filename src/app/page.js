import CategoryCard from "./components/CategoryCard";

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
  ];
  return (
    <div>
      <h1 className="italic font-extrabold text-5xl">Avalon</h1>
      <div>
        <h4>Stuff</h4>
        <div className="flex flex-row flex-wrap">
          {subcategories.map((subcategory) => (
            <CategoryCard title={subcategory.title} img={subcategory.image} />
          ))}
        </div>
      </div>
      <h2>Shop Popular Categories</h2>
      <div className="flex flex-row flex-wrap">
        {categories.map((category) => (
          <CategoryCard title={category.title} img={category.image} />
        ))}
      </div>
    </div>
  );
}
