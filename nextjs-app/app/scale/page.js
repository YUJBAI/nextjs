import React from "react";
import Hero from "@/components/hero";
import scale from "@/public/scale.jpg";
export default function Page() {
  return (
    <Hero
      imgURL={scale}
      style={{ objectFit: "cover" }}
      altText="scale"
      content="Scale~~~"
    />
  );
}
