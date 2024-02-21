"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { BellIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function HomeNav() {
  const pathname = usePathname();

  return (
    <div className="py-2 px-6 z-10 bg-background fixed top-0 w-full flex justify-between items-center">
      {pathname === "/app" ? (
        <Link href="/app" className="flex gap-1 items-center">
          <Image
            src="/Takaful-logo.png"
            alt="Takaful Logo"
            width={25}
            height={25}
            layout="fixed"
          />
        </Link>
      ) : (
        <Button size="icon" variant="ghost">
          <ChevronLeftIcon
            className="h-5 w-5"
            onClick={() => window.history.back()}
          />
        </Button>
      )}
      <span className="text-slate-500">
        <BellIcon className="fill-current h-5 w-5" />
      </span>
    </div>
  );
}
