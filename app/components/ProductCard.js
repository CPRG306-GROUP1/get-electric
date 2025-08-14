"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // import router
import sampleImage from "../public/images/iphone-test-pic.jpg";

const ProductCard = ({ item }) => {
  const router = useRouter();

  const handleAddProduct = () => {
    // Optionally save product in localStorage
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (!saved.find((p) => p.id === item.id)) {
      saved.push(item);
      localStorage.setItem("wishlist", JSON.stringify(saved));
    }

    // Navigate to wishlist page
    router.push("/Wishlist");
  };

  const getImageByCategory = (category) => {
    switch (category) {
      case "Accessories":
        return "/images/accessories.jpg";
      case "Audio":
        return "/images/audio.jpg";
      case "Cameras":
        return "/images/camera.jpg";
      case "Drones":
        return "/images/drones.jpg";
      case "Gaming":
        return "/images/gaming.jpg";
      case "Power":
        return "/images/power.jpg";
      case "Smartphones":
        return "/images/smartphone.jpg";
      case "Smart Home":
        return "/images/smarthome.jpg";
      case "Tablets":
        return "/images/tablet.jpg";
      case "Wearables":
        return "/images/wearable.jpg";
      default:
        return sampleImage;
    }
  };

  return (
    <div className="bg-gray-200 rounded text-gray-900">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={getImageByCategory(item.category)}
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
        <p>
          ${(item.amazonPrice - item.price).toFixed(2)} cheaper than on Amazon
        </p>
        <p>
          {item.quantityOnHand > 0
            ? `${item.quantityOnHand} Available - Selling Fast!`
            : "Sold Out"}
        </p>
        <button
          onClick={handleAddProduct} // <-- call function on click
          className="text-center bg-green-600 rounded-lg p-1 text-white"
        >
          Add to Wish List
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
