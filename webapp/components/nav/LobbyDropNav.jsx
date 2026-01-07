"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function LobbyDropdownNav({ open, close }) {
  const pathname = usePathname();
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;

    const handleOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        close();
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () =>
      document.removeEventListener("click", handleOutsideClick);
  }, [open, close]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/masterleague", label: "MasterLeague" }
  ];

  return (
    <nav
      ref={ref}
      className={`dropdown ${open ? "show" : ""}`}
      aria-hidden={!open}
    >
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`nav-item ${
            pathname === item.href ? "active" : ""
          }`}
          onClick={close}
        >
          {item.label}
        </Link>
      ))}
	  <a>
		More coming - TBA
	  </a>
    </nav>
  );
}

