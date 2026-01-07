// app/layout.jsx
import './globals.css';
import "@/styles/header.css";

export const metadata = {
  title: 'MasterLeague Companion App',
  description: 'MasterLeague Companion App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
