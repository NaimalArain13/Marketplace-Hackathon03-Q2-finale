import React from "react";
import CategoryCard, { CategoryProps } from "./categoryCard";

export default function Category() {
  const categories: CategoryProps[] = [
    {
      image:
        "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1737301950/CHANEL_CHANCE_EAU_TENDRE_Eau_de_Parfum_Fragrance_Collection_-_Macy_s_t7aham.jpg",
      title: "Perfumes",
      value:"/perfumes"
    },
    {
      image:
        "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1737189460/Watch8_kakgvb.jpg",
      title: "Watches",
      value:"/watches"
    },
  ];

  return (
    <div className="w-full p-7">
      <div className="flex justify-center items-center py-4">
      <div>
            <h1 className="font-semibold text-3xl">Browse By Category</h1>
          </div>
      </div>
      <div className="flex gap-[30px] items-center justify-center ">
        {categories.map((cate, index) => (
          <CategoryCard key={index} {...cate} />
        ))}
      </div>
    </div>
  );
}
