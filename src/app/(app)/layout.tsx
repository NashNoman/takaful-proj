import Link from "next/link";
import Image from "next/image";
import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { HomeIcon } from "@radix-ui/react-icons";
import AppBottomNav from "@/components/layout/app-bottom-nav";
import { BellIcon } from "lucide-react";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <div className="h-screen flex flex-col">
      <div className="py-4 px-6 flex justify-between items-center">
        <Link href="/app" className="flex gap-1 items-center">
          <Image
            src="/Takaful-logo.png"
            alt="Takaful Logo"
            width={25}
            height={25}
            layout="fixed"
          />
          {/* <p
            className="text-lg"
            style={{
              fontFamily: "Berlin Sans FB",
            }}
          >
            TAKAFUL
          </p> */}
        </Link>
        <span className="text-slate-500">
          <BellIcon className="fill-current h-5 w-5" />
        </span>
      </div>
      {children}
      {/* <AppBottomNav /> */}
    </div>
  );
}
