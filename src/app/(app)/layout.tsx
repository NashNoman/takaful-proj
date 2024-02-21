import Link from "next/link";
import Image from "next/image";
import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { HomeIcon } from "@radix-ui/react-icons";
import AppBottomNav from "@/components/layout/app-bottom-nav";
import { BellIcon } from "lucide-react";
import HomeNav from "@/app/(app)/app/_components/layout/home-nav";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default async function layout({ children }: Props) {
  const session = await getServerSession();

  return (
    <div className="h-screen flex flex-col pt-10">
      <HomeNav />
      {children}
      {/* <AppBottomNav /> */}
    </div>
  );
}
