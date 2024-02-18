"use client";

export default function GreetingHeader() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const greeting = currentHour < 12 ? "Good morning" : "Good evening";

  return (
    <div className="bg-primary text-white my-4 p-10 rounded-md">
      <h1 className="font-bold leading-10 text-4xl text-center">{`${greeting}, Nashwan!`}</h1>
    </div>
  );
}
