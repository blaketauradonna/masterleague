// app/layout.jsx
import './globals.css';

export const metadata = {
  title: 'MasterLeague App',
  description: 'Login and Registeration for MasterLeague membership events.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>MasterLeague</h1>
        </header>
        <div className="topnav"><></>
          <a href="/">Home</a>
          <a href="/register">Register</a>
          <a href="/profile">Profile</a>
          <a href="/eventlist">Event List</a>
        </div>

        <main style={{ padding: '20px' }}>{children}</main>

        <footer>
          <p>© 2025 MasterLeague</p>
        </footer>
      </body>
    </html>
  );
}
