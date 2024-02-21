"use client";
import { HeaderTitleContext } from "@/context/nav-header-context";
import React, { useState } from "react";

export default function NavHeaderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [pageTitle, setPageTitle] = useState("Home");

  return (
    <HeaderTitleContext.Provider value={[pageTitle, setPageTitle]}>
      {children}
    </HeaderTitleContext.Provider>
  );
}
