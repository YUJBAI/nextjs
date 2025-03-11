import React from "react";
import Image, { StaticImageData } from "next/image";
export default function Hero(props) {
  console.log(props.content);
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src={props.imgURL}
          fill
          style={{ objectFit: "cover" }}
          alt={props.altText}
        />
        <div className="absolute inst-0 bg-gradient-to-r from-gray-950"></div>
        <div className="flex justify-center pt-48">
          <h1 className="text-white text-6xl z-10">{props.content}</h1>
        </div>
      </div>
    </div>
  );
}
