"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/config";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ProductListRenderer from "./components/ProductListRenderer";
import FilterBar from "./components/FilterBar";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [userSession, setUserSession] = useState(false);
  const [isSessionLoaded, setIsSessionLoaded] = useState(false);

  const testData = [
    {
      id: 1,
      title: "iPhone 14 Pro",
      description: "Latest Apple smartphone with A16 Bionic chip.",
      category: "Smartphones",
      price: 999.99,
      amazonPrice: 1099.99,
      quantityOnHand: 5,
    },
    {
      id: 2,
      title: "Samsung Galaxy S22",
      description: "Flagship Android phone with 120Hz AMOLED display.",
      category: "Smartphones",
      price: 849.99,
      amazonPrice: 899.99,
      quantityOnHand: 8,
    },
    {
      id: 3,
      title: "MacBook Air M2",
      description: "Lightweight laptop powered by Apple M2 chip.",
      category: "Laptops",
      price: 1199.99,
      amazonPrice: 1249.99,
      quantityOnHand: 4,
    },
    {
      id: 4,
      title: "Dell XPS 13",
      description: "Compact Windows ultrabook with InfinityEdge display.",
      category: "Laptops",
      price: 999.99,
      amazonPrice: 1049.99,
      quantityOnHand: 6,
    },
    {
      id: 5,
      title: "Sony WH-1000XM5",
      description: "Industry-leading noise canceling headphones.",
      category: "Audio",
      price: 379.99,
      amazonPrice: 399.99,
      quantityOnHand: 12,
    },
    {
      id: 6,
      title: "Bose QuietComfort 45",
      description: "Comfortable wireless headphones with ANC.",
      category: "Audio",
      price: 299.99,
      amazonPrice: 329.99,
      quantityOnHand: 10,
    },
    {
      id: 7,
      title: 'iPad Pro 11"',
      description: "Apple tablet with M2 chip and ProMotion display.",
      category: "Tablets",
      price: 799.99,
      amazonPrice: 849.99,
      quantityOnHand: 3,
    },
    {
      id: 8,
      title: "Samsung Galaxy Tab S8",
      description: "High-performance Android tablet with S Pen.",
      category: "Tablets",
      price: 749.99,
      amazonPrice: 779.99,
      quantityOnHand: 7,
    },
    {
      id: 9,
      title: "Apple Watch Series 9",
      description: "Smartwatch with advanced health tracking features.",
      category: "Wearables",
      price: 429.99,
      amazonPrice: 449.99,
      quantityOnHand: 9,
    },
    {
      id: 10,
      title: "Fitbit Charge 6",
      description: "Fitness tracker with heart rate and GPS.",
      category: "Wearables",
      price: 149.99,
      amazonPrice: 169.99,
      quantityOnHand: 14,
    },
    {
      id: 11,
      title: "GoPro HERO12",
      description: "Action camera with 5.3K video and stabilization.",
      category: "Cameras",
      price: 449.99,
      amazonPrice: 479.99,
      quantityOnHand: 5,
    },
    {
      id: 12,
      title: "Canon EOS R10",
      description: "Mirrorless camera with 24MP sensor and 4K video.",
      category: "Cameras",
      price: 999.99,
      amazonPrice: 1049.99,
      quantityOnHand: 2,
    },
    {
      id: 13,
      title: "Logitech MX Master 3S",
      description: "Premium ergonomic mouse for productivity.",
      category: "Accessories",
      price: 99.99,
      amazonPrice: 109.99,
      quantityOnHand: 20,
    },
    {
      id: 14,
      title: "Razer BlackWidow V4",
      description: "Mechanical RGB gaming keyboard.",
      category: "Accessories",
      price: 169.99,
      amazonPrice: 179.99,
      quantityOnHand: 11,
    },
    {
      id: 15,
      title: "Sony PlayStation 5",
      description: "Next-gen gaming console with ray tracing support.",
      category: "Gaming",
      price: 499.99,
      amazonPrice: 549.99,
      quantityOnHand: 4,
    },
    {
      id: 16,
      title: "Xbox Series X",
      description: "Powerful gaming console with Game Pass support.",
      category: "Gaming",
      price: 499.99,
      amazonPrice: 529.99,
      quantityOnHand: 6,
    },
    {
      id: 17,
      title: "DJI Mini 4 Pro",
      description: "Compact drone with 4K video and obstacle avoidance.",
      category: "Drones",
      price: 759.99,
      amazonPrice: 799.99,
      quantityOnHand: 3,
    },
    {
      id: 18,
      title: "Anker 737 Power Bank",
      description: "Portable charger with fast USB-C output.",
      category: "Power",
      price: 139.99,
      amazonPrice: 149.99,
      quantityOnHand: 18,
    },
    {
      id: 19,
      title: "Google Nest Thermostat",
      description: "Smart thermostat with energy-saving features.",
      category: "Smart Home",
      price: 129.99,
      amazonPrice: 139.99,
      quantityOnHand: 7,
    },
    {
      id: 20,
      title: "Ring Video Doorbell 4",
      description:
        "Wi-Fi smart doorbell with two-way talk and motion detection.",
      category: "Smart Home",
      price: 199.99,
      amazonPrice: 219.99,
      quantityOnHand: 5,
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const session = sessionStorage.getItem("user");
      setUserSession(session);
      setIsSessionLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isSessionLoaded && !user && !userSession) {
      router.push("/sign-in");
    }
  }, [isSessionLoaded, user, userSession, router]);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold text-white">Welcome to Get Electric</h1>
        <FilterBar />
        <ProductListRenderer products={testData} />
      </main>
    </div>
  );
}
