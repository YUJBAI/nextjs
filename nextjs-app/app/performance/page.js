import React from "react";
import Hero from "@/components/hero";
import Performance from "@/public/Performance.jpg";
export default function Page() {
  return (
    <Hero
      imgURL={Performance}
      style={{ objectFit: "cover" }}
      altText="Performance"
      content="Performance~~~"
    />
  );
}
