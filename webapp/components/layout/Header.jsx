"use client";

import { useState } from "react";
import Image from "next/image";
import DropdownNav from "@/components/nav/DropdownNav";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <button
        className={`menu-btn ${open ? "active" : ""}`}
        onClick={toggleMenu}
        aria-expanded={open}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>
    <img src="/header.png" alt="MasterLeague Logo" className="brand-logo"></img>

      <DropdownNav open={open} close={() => setOpen(false)} />
    </header>
  );
}
