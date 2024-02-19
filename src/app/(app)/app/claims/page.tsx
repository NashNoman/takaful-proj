// "use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRightCircle } from "lucide-react";
import React, { useState } from "react";

export default function page() {
  // const [chat, setChat] = useState();
  // const [message, setMessage] = useState();

  return (
    <>
      <main className="container flex-1">
        <div></div>
      </main>
      <div className="px-2 pb-3 flex items-center gap-2">
        <Input
          className="!ring-0 !ring-offset-0 rounded-full bg-gray-100 shadow-md"
          placeholder="Type your message..."
        />
        <Button size="icon" className="rounded-full text-blue-200">
          <ArrowRightCircle />
        </Button>
      </div>
    </>
  );
}
