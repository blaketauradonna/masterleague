"use client";

import { useState } from "react";
import Image from "next/image";
import HamburgerButton from "../ui/HamburgerButton";
import MasterleagueDropdownNav from "../nav/MasterleagueDropNav";

export default function MasterLeagueHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="masterleague-header">
      <HamburgerButton open={open} toggle={() => setOpen(o => !o)} />

      <img src="/masterleagueheader.png" alt="MasterLeague Logo" className="brand-logo"></img>

      <MasterleagueDropdownNav open={open} close={() => setOpen(false)} />

    </header>
  );
}
