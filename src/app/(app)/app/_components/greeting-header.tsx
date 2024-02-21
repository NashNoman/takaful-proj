"use client";

import { signIn, useSession } from "next-auth/react";

export default function GreetingHeader() {
  const { data } = useSession();

  // if (!data)
  //   signIn("credentials", {
  //     phoneOrEmail: "+967771811986",
  //     password: "nnomanheao",
  //     callbackUrl: "/app",
  //   });

  console.log(data);

  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const greeting = currentHour < 12 ? "Good morning" : "Good evening";

  return (
    <div className="bg-primary text-white my-4 p-10 rounded-md">
      <h1 className="font-bold leading-10 text-4xl text-center">{`${greeting}, ${data?.user.firstName}!`}</h1>
    </div>
  );
}
