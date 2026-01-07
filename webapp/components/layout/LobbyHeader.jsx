"use client";

import { useState } from "react";
import Image from "next/image";
import HamburgerButton from "../ui/HamburgerButton";
import LobbyDropdownNav from "../nav/LobbyDropNav";

export default function LobbyHeader() {
	const [open, setOpen] = useState(false);

	return (
		<header className="lobby-header">
			<HamburgerButton open={open} toggle={() => setOpen(o => !o)} />

			<img src="/lobbyheader.jpg" alt="Lobby Logo" className="brand-logo"></img>

			<LobbyDropdownNav open={open} close={() => setOpen(false)} />
		</header>
	);
}
