"use client";

import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import {
  CircleUserRoundIcon,
  ClipboardCheckIcon,
  HomeIcon,
  ReceiptIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

export default function AppBottomNav() {
  const pathname = usePathname();

  return (
    <BottomNavigation
      showLabels
      className="fixed bottom-0 w-full font-semibold border-t"
    >
      <BottomNavigationAction
        className={pathname === "/app" ? "text-primary" : ""}
        label="Home"
        icon={<HomeIcon className="h-6 w-6" />}
        href="/app"
      />
      <BottomNavigationAction
        className={pathname.startsWith("/app/billing") ? "text-primary" : ""}
        label="Billing"
        icon={<ReceiptIcon className="h-6 w-6" />}
        href="/app/billing"
      />
      <BottomNavigationAction
        className={pathname.startsWith("/app/claims") ? "text-primary" : ""}
        label="Claims"
        icon={<ClipboardCheckIcon className="h-6 w-6" />}
        href="/app/claims"
      />
      <BottomNavigationAction
        className={pathname.startsWith("/app/account") ? "text-primary" : ""}
        label="Account"
        icon={<CircleUserRoundIcon className="h-6 w-6" />}
        href="/app/account"
      />
    </BottomNavigation>
  );
}
