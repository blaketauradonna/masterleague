import MasterLeagueHeader from "@/components/layout/MasterLeagueHeader";

export default function MasterLeagueLayout({ children }) {
  return (
    <>
      <MasterLeagueHeader />

      <main style={{ padding: '20px', paddingTop: "56px" }}>
        {children}
      </main>

      <footer>
        <p style={{ color: 'black' }}>© 2026 Court Time Limited</p>
      </footer>
    </>
  );
}
