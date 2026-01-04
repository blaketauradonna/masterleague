// app/layout.jsx
import './globals.css';
import "@/styles/header.css";

import Header from "@/components/layout/Header"; // use our own <Header> instead of <header>

export const metadata = {
  title: 'MasterLeague App',
  description: 'Login and Registeration for MasterLeague membership events.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header>
        </Header>

        <main style={{ padding: '20px' , paddingTop: "56px" }}>{children}</main>

        <footer>
          <p>© 2026 Court Time Limited</p>
        </footer>
      </body>
    </html>
  );
}
