"use client";

import React, { useState } from "react";
import BioGeneratorForm from "./bio-generator-form";
import BioGeneratorOutput from "./bio-generator-output";

const BioGeneratorClient = () => {
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleGenerateBio = async (input: string) => {
    setLoading(true);         // Start loading
  setError("");             // Clear previous error
  setOutput(""); 
  try {
    const res = await fetch("/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "chat",
        prompt:`Write a short professional bio in 3-4 lines using this information: ${input}. Do not explain or give general advice, only output the bio.`,      
        options: {
          model: "openai",     
        },
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Something went wrong");
    }
    setOutput(data.data); 
  } catch (err: any) {
    console.error("Bio generation error:", err.message);
    setOutput("Error generating bio.");
  } finally {
    setLoading(false);      // Stop loading
  }
};

  return (
    <div className="p-4 w-[60%] mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center text-indigo-700 mt-20">🧠 AI Bio Generator</h1>
      <BioGeneratorForm onGenerate={handleGenerateBio} />
      {loading && <p className="text-blue-500 mt-4">Generating...</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      <BioGeneratorOutput output={output} isLoading={loading} />
      <div>
      <h1 className="font-bold text-3xl mt-30"> 📝 How to Use the AI Bio Generator </h1> 
      <p className="text-xl mt-10 font-bold">Welcome to the AI Bio Generator! </p>
      Follow these simple steps to create a professional and personalized bio :<br/><br/>
      <span className="font-bold">Enter your details – </span> Tell us about yourself : your name , role , background, and anything you'd like in your bio.
      <br/>
      <span className="font-bold">Click “Generate” – </span> Our AI will craft a well-written bio just for you.
      <br/>
      <span className="font-bold">Copy & Use – </span> Once it appears, feel free to copy your new bio and use it on LinkedIn, your portfolio, or anywhere you like.

🚀 <br/>
     <span className="font-bold">Perfect for students, developers, professionals, and creatives!</span>

      </div>
    </div>
  );
};

export default BioGeneratorClient;
