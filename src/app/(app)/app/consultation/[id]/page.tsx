import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

/**
 * The following is a page for the consultation module.
 * In this page, the user can interact with the chatbot or a live agent in a chat interface.
 * @param props The parameters for the page.
 * @returns The consultation page.
 */
export default function page({ params }: Props) {
  return (
    <div className="flex flex-grow flex-col">
      <ScrollArea className="flex-grow">
        <main>
          <p>Hello</p>
        </main>
      </ScrollArea>
      <div>
        <input type="text" placeholder="Type your message..." />
      </div>
    </div>
  );
}
