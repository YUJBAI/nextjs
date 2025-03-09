"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const linkDate = [
  { name: "About", path: "/dashboard/about" },
  { name: "Settings", path: "/dashboard/settings" },
];
export default function DashboardLayout({ children }) {
  const [count, setCount] = useState(0);
  const pathName = usePathname();
  console.log("pathName", pathName);
  return (
    <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10">
      <div className="flex gap-4 font-bold text-lg mb-4">
        {linkDate.map((link) => (
          <Link
            key={link.path}
            className={pathName === link.path ? "text-purple-500" : ""}
            href={link.path}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <h2>Dashboard layout {count}</h2>
      <button
        className="bg-black text-white p-2 my-4 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        Increament
      </button>
      {children}
    </div>
  );
}
