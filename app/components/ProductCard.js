import React from "react";
import Image from "next/image";
import sampleImage from "../public/images/iphone-test-pic.jpg";

const ProductCard = ({ item }) => {
  const handleAddProduct = () => {
    // Function to add product to users wishlist
  };

  return (
    <div className="bg-gray-200 rounded text-gray-900">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={sampleImage}
          alt={item.title}
          fill
          className="object-cover rounded"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="p-2">
        <h1 className="font-bold text-xl">{item.title}</h1>
        <p className="text-sm">{item.description}</p>
        <p>${item.price}</p>
        <p>${item.amazonPrice - item.price} cheaper than on amazon</p>
        <p>
          {item.quantityOnHand > 0
            ? `${item.quantityOnHand} Available - Selling Fast!`
            : "Sold Out"}
        </p>
        <button
          onClick={handleAddProduct()}
          className="text-center bg-green-600 rounded-lg p-1 text-white"
        >
          Add to Wish List
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
