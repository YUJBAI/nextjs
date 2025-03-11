import React from "react";
import Hero from "@/components/hero";
import Reliability from "@/public/Reliability.jpg";
export default function Page() {
  return (
    <Hero
      imgURL={Reliability}
      style={{ objectFit: "cover" }}
      altText="Reliability"
      content="Reliability~~~"
    />
  );
}
