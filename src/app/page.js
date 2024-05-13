import CategoryCard from "./components/CategoryCard";

export default function Home() {
  const categories = [{ title: "Clothing", image: "/images/clothes1.jpeg" }];
  return (
    <div>
      <h1>Avalon</h1>
      {categories.map((category) => (
        <CategoryCard title={category.title} img={category.image} />
      ))}
    </div>
  );
}
