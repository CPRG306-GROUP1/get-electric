"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import sampleImage from "../public/images/iphone-test-pic.jpg";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(saved);
  }, []);

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
    <div className="p-8 bg-white text-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>No items saved yet.</p>
      ) : (
        wishlist.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 p-4 rounded mb-4 flex items-center"
          >
            <div className="relative w-24 h-24 mr-4">
              <Image
                src={getImageByCategory(item.category)}
                alt={item.title}
                fill
                className="object-cover rounded"
                sizes="100px"
              />
            </div>
            <div>
              <h2 className="font-semibold">{item.title}</h2>
              <p>${item.price}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
