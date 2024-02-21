"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/Takaful-logo.png";
import React, { useState } from "react";
import { SwipeableDrawer } from "@mui/material";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="py-2 px-6 border-b border-slate-200 flex justify-between items-center">
        <Link href="/" className="flex gap-1 items-center">
          <Image src={Logo} alt="Takaful Logo" width={25} layout="fixed" />
          <p
            className="text-lg"
            style={{
              fontFamily: "Berlin Sans FB",
            }}
          >
            TAKAFUL
          </p>
        </Link>

        <nav>
          <HamburgerMenuIcon className="h-5 w-5" onClick={handleToggleMenu} />
        </nav>
      </div>
      <SwipeableDrawer
        anchor="top"
        open={isOpen}
        onClose={handleToggleMenu}
        onOpen={handleToggleMenu}
      >
        <div className="p-4 flex flex-col text-lg gap-4 font-medium">
          <Link href="/signup">My Account</Link>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/support">Support & Consultation</Link>
        </div>
      </SwipeableDrawer>
    </>
  );
}
