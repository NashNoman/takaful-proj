"use client";

export default function Greeting() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const greeting = currentHour < 12 ? "Good morning!" : "Good evening!";

  return <h1 className="font-bold text-5xl mt-10 mb-28">{greeting}</h1>;
}
