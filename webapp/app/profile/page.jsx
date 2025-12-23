'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
	const router = useRouter();
	const [user, setUser] = useState(null);

	useEffect(() => {
		fetch('/api/auth/profile')
			.then(res => {
				if (!res.ok) router.push('/login'); // not logged in
				return res.json();
			})
			.then(data => setUser(data.user))
			.catch(() => router.push('/login'));
	}, []);

	if (!user) return <p>Loading...</p>;

	async function handleLogout() {
		await fetch('/api/auth/logout', { method: 'POST' });
		router.push('/login'); // redirect to login page after logout
	}

	return (
		<div style={{ padding: 40 }}>
			<h1>Welcome, {user.username}</h1>
			<p>Your user ID: {user.id}</p>

			<button onClick={handleLogout} style={{ marginTop: '20px' }}>
				Logout
			</button>
		</div>
	);
}
