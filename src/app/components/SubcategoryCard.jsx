import React from "react";

function SubcategoryCard({ subcategories }) {
  return (
    <div className="flex justify-around items-center bg-white py-8 overflow-x-auto">
      {subcategories.map((subcategory, index) => (
        <div key={index} className="flex flex-col items-center mx-4">
          <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden">
            <img
              src={subcategory.image}
              alt={subcategory.title}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="mt-2 text-sm text-center">{subcategory.title}</p>
        </div>
      ))}
    </div>
  );
}

export default SubcategoryCard;