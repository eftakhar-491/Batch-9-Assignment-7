import React from "react";

const RecipeCard = ({ data, handelWantToCook }) => {
  return (
    <div className="max-w-xs mx-auto border border-gray-200 rounded-lg shadow-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <img
          src={data.recipe_image}
          alt="Spaghetti Bolognese"
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {data.recipe_name}
        </h2>
        <p className="text-gray-600 mb-4">{data.short_description}</p>

        {/* Ingredients List */}
        <div className="mb-4">
          <h3 className="font-semibold">Ingredients: 6</h3>
          <ul className="list-disc list-inside text-gray-600">
            {data.ingredients.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>

        {/* Time and Calories */}
        <div className="flex items-center justify-between text-gray-600 text-sm mb-4">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3"
              ></path>
            </svg>
            {data.preparing_time} minutes
          </div>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14"
              ></path>
            </svg>
            {data.calories} calories
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => handelWantToCook(data)}
          className="w-full bg-green-500 text-white text-center py-2 rounded-lg hover:bg-green-600"
        >
          Want to Cook
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
