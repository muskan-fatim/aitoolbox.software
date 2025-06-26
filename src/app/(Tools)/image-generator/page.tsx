import React from "react";
import ImageGeneratorClient from "./_components/image-generator-client";

export default function ImageGeneratorPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">Free AI Image & Photo Generator</h1>
      <p className="text-gray-500 mb-8">
        Generate high-quality images and photos for free using our AI image generator. Simply enter a text prompt—no cost, unlimited usage.
      </p>
      
      <ImageGeneratorClient />
    </div>
  );
}
