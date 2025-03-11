"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const linkDate = [
  { name: "Performance", path: "/performance" },
  { name: "Reliability", path: "/reliability" },
  { name: "Scale", path: "/scale" },
];
export default function Header() {
  const pathName = usePathname();
  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between container mx-auto">
        <Link className="text-3xl font-bold" href="/">
          Home
        </Link>
        <div className="text-xl space-x-4">
          {linkDate.map((link) => (
            <Link
              key={link.name}
              className={pathName === link.path ? "text-purple-500" : ""}
              href={link.path}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
