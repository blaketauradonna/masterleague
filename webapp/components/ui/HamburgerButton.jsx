"use client";

export default function HamburgerButton({ open, toggle }) {
  return (
    <button
		className={`menu-btn ${open ? "active" : ""}`}
		onClick={toggle}
		aria-expanded={open}
		aria-label="Toggle navigation menu"
	  >
		☰
	  </button>
  );
}
