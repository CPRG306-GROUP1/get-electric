"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/config";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ProductListRenderer from "./components/ProductListRenderer";
import FilterBar from "./components/FilterBar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/config";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [userSession, setUserSession] = useState(false);
  const [isSessionLoaded, setIsSessionLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]); // Initialize with empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        console.log("Fetched products:", querySnapshot.docs.length);
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(items);
        setDisplayedProducts(items); // Also set displayed products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

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

  // Add this useEffect to sync displayedProducts with data
  useEffect(() => {
    setDisplayedProducts(data);
  }, [data]);

  // Handle search function
  const handleSearch = ({ query, category, priceMode, price }) => {
    let filtered = data;

    // Search Term filter
    if (query) {
      const queryLower = query.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(queryLower) ||
          item.description.toLowerCase().includes(queryLower)
      );
    }

    // Category Filter
    if (category) {
      filtered = filtered.filter((item) => item.category === category);
    }

    // Price Filter
    if (price > 0) {
      if (priceMode === "under") {
        filtered = filtered.filter((item) => item.price <= price);
      } else {
        filtered = filtered.filter((item) => item.price >= price);
      }
    }

    setDisplayedProducts(filtered);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold text-white">
          Welcome to Get Electric
        </h1>
        <FilterBar onSearch={handleSearch} />
        <ProductListRenderer products={displayedProducts} />
      </main>
    </div>
  );
}
