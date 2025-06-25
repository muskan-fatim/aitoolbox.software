"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="border-b bg-background h-[60px] w-full flex items-center px-4 z-10">
      <div className="container flex items-center">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="AIToolbox Logo"
            width={36}
            height={36}
            className="rounded"
          />
          <span className="text-xl font-semibold hidden sm:inline">AIToolbox</span>
        </Link>
      </div>
    </header>
  );
}
