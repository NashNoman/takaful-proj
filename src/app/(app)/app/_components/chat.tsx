"use client";

import { Button } from "@/components/ui/button";
import { CameraIcon, ImagePlus, LucideCamera } from "lucide-react";
import React, { useRef, useState } from "react";

type Message = {
  id: number;
  sender: {
    name: string;
    avatar: string;
  };
  content: string;
  time: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  const mediaUploader = useRef(null);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 pt-20 pb-16 container">
        {messages.map((message) => (
          <div key={message.id} className="flex flex-col gap-1">
            <div className="flex gap-2">
              <img
                src={message.sender.avatar}
                alt={message.sender.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-bold">{message.sender.name}</p>
                <p>{message.content}</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">{message.time}</p>
          </div>
        ))}
      </div>
      <div className="flex bg-background p-1 absolute items-end bottom-0 w-full border-t border-input">
        <textarea
          className="flex-1 p-2 mr-2 max-h-36 !outline-none resize-none container-snap"
          placeholder="Type your message..."
          value={message}
          rows={message.split("\n").length}
          onChange={(e) => setMessage(e.target.value)}
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
        <Button
          variant="ghost"
          onClick={() => {
            if (!message.trim()) return;

            setMessages((prev) => [
              ...prev,
              {
                id: prev.length + 1,
                sender: {
                  name: "Noman",
                  avatar:
                    "https://avatars.dicebear.com/api/avataaars/noman.svg",
                },
                content: message.trim(),
                time: new Date().toLocaleTimeString(),
              },
            ]);
            // setMessage("");
          }}
        >
          Send
        </Button>
      </div>
    </div>
  );
}
