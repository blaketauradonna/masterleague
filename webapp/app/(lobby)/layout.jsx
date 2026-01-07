import LobbyHeader from "@/components/layout/LobbyHeader"; // use our own <Header> instead of <header>

export default function LobbyLayout({ children }) {
	return (
		<>
			<LobbyHeader />

			<main style={{ padding: '20px', paddingTop: "56px" }}>
				{children}
			</main>

			<footer>
				<p style={{ color: 'black' }}>© 2026 Court Time Limited</p>
			</footer>
		</>
	);
}
