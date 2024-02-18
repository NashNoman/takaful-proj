import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <main className="container">
      <Image
        src="/motorcycle.png"
        alt="motorcycle insurance image"
        width={400}
        height={400}
      />
    </main>
  );
}
