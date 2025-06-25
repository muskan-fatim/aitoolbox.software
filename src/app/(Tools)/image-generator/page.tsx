import React from "react";
import ImageGeneratorClient from "./_components/image-generator-client";

export default function ImageGeneratorPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">Image Generator</h1>
      <p className="text-gray-500 mb-8">
        Create stunning images with AI using simple text prompts
      </p>
      
      <ImageGeneratorClient />
    </div>
  );
}
