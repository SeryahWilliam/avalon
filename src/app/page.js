import CategoryCard from "./components/CategoryCard";

export default function Home() {
  const categories = [
    { title: "Clothing", image: "/images/clothes1.jpeg" },
    { title: "Beauty", image: "/images/beauty.jpeg" },
    { title: "Appliances", image: "/images/appliances2.jpeg" },
  ];
  return (
    <div>
      <h1>Avalon</h1>
      <div>
        <h4>Stuff</h4>
      </div>
      <h2>Shop Popular Categories</h2>
      <div className="flex flex-row">
        {categories.map((category) => (
          <CategoryCard title={category.title} img={category.image} />
        ))}
      </div>
    </div>
  );
}
