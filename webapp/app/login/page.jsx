'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Check if already logged in
  useEffect(() => {
    fetch('/api/auth/profile')
      .then(res => {
        if (res.ok) router.push('/profile'); // already logged in
      })
      .catch(() => {});
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });

    const data = await res.json();
    if (!res.ok) setError(data.error);
    else router.push('/profile'); // redirect after login
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        
        <br></br>
        Email:
        <input name="email" placeholder="Email" required />

        <br /><br />
        Password:
        <input name="password" type="password" placeholder="Password" required />
        <br /><br />
        <button type="submit">Submit</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
