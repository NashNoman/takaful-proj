"use client";

import { Button } from "@/components/ui/button";
import { HeaderTitleContext } from "@/context/nav-header-context";
import { CameraIcon, ImagePlus, LucideCamera } from "lucide-react";
import React, { useContext, useEffect, useRef, useState } from "react";

type Message = {
  id: number;
  sender: {
    name: string;
    id: string;
  };
  content: string;
  time: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  const mediaUploader = useRef(null);
  const [pageTitle, setPageTitle] = useContext(HeaderTitleContext);

  useEffect(() => {
    setPageTitle("Claims");
  }, [setPageTitle]);

  const handleSend = () => {
    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        sender: {
          name: "Noman",
          id: "1",
        },
        content: message.trim(),
        time: new Date().toLocaleTimeString(
          Intl.DateTimeFormat().resolvedOptions().locale,
          {
            hour: "2-digit",
            minute: "2-digit",
          },
        ),
      },
    ]);
    setMessage("");
  };

  return (
    <>
      <div className="flex flex-col gap-2 pt-20 pb-16 container">
        {messages.map((message) => (
          <div key={message.id} className="flex flex-col gap-1">
            {/* <div className="flex gap-2"> */}
            <div>
              <p className="font-bold">{message.sender.name}</p>
              <p>{message.content}</p>
            </div>
            {/* </div> */}
            <p
              className="text-xs text-gray-500"
              ref={(el) => {
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {message.time}
            </p>
          </div>
        ))}
      </div>
      <div className="flex z-10 bg-background p-1 absolute items-end bottom-0 w-full">
        <textarea
          className="flex-1 p-2 mr-2 max-h-36 !outline-none resize-none container-snap"
          placeholder="Type your message..."
          value={message}
          rows={message.split("\n").length}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDownCapture={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSend();
            }
          }}
          autoComplete="off"
        />
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-500"
          onClick={() => {
            (mediaUploader.current as HTMLInputElement | null)?.click();
          }}
        >
          <ImagePlus />
          <input
            type="file"
            ref={mediaUploader}
            className="hidden"
            accept="image/*, video/*"
            capture
          />
          {/* <span>Media</span> */}
        </Button>
        <Button variant="ghost" onClick={handleSend}>
          Send
        </Button>
      </div>
    </>
  );
}
