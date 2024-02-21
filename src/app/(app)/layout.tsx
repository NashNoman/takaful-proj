import Link from "next/link";
import Image from "next/image";
import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { HomeIcon } from "@radix-ui/react-icons";
import AppBottomNav from "@/components/layout/app-bottom-nav";
import { BellIcon } from "lucide-react";
import HomeNav from "@/app/(app)/app/_components/layout/home-nav";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <div className="h-screen flex flex-col">
      <HomeNav />
      {children}
      {/* <AppBottomNav /> */}
    </div>
  );
}
