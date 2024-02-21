// "use client";

import Chat from "@/app/(app)/app/_components/chat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowRightCircle } from "lucide-react";
import React, { useState } from "react";

export default function page() {
  // const [chat, setChat] = useState();
  // const [message, setMessage] = useState();

  return (
    <>
      <main className="overflow-y-hidden flex-1 bg-red-100">
        <ScrollArea className="h-full">
          <Chat />
        </ScrollArea>
      </main>
      {/* <div className="px-2 pb-3 fixed bottom-0 w-full flex items-center gap-2">
        <Input
          className="!ring-0 !ring-offset-0 rounded-full bg-gray-100 shadow-md"
          placeholder="Type your message..."
        />
        <Button size="icon" className="rounded-full text-blue-200">
          <ArrowRightCircle />
        </Button>
      </div> */}
    </>
  );
}
