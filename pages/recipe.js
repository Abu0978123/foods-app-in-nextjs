import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function YourComponent() {
  const [recipe, setRecipe] = useState([]);
  const cardBackgroundColors = [
    "bg-blue-300",
    "bg-green-300",
    "bg-red-300",
    "bg-yellow-300",
    "bg-purple-300",
    // Add more colors as needed
  ];

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      if (response.ok) {
        const data = await response.json();
        setRecipe(data.categories.slice(0, 50)); // Limit to the first 50 categories
        console.log(data);
      } else {
        console.error('Network response was not ok');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Our Impressive Recipe</h1>
      <p className="text-center mb-10">World Best Recipe, Abu Bakar Foodie</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recipe.map((item, index) => (
          <motion.div
            key={item.idCategory}
            className={`rounded-lg shadow-lg overflow-hidden ${cardBackgroundColors[index % cardBackgroundColors.length]}`}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={item.strCategoryThumb}
              alt={item.strCategory}
              width={250}
              height={250}
              className="object-cover w-full h-40"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold ">{item.strCategory}</h2>
              <p className=" mb-4 text-black">
                {item.strCategoryDescription.slice(0, 100)}...
              </p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default YourComponent;
