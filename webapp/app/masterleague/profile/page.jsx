'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MasterleagueProfilePage() {
	const router = useRouter();
	const [user, setUser] = useState(null);

	useEffect(() => {
		fetch('/api/auth/profile')
			.then(res => {
				if (!res.ok) router.push('/masterleague/login'); // not logged in
				return res.json();
			})
			.then(data => setUser(data.user))
			.catch(() => router.push('/masterleague/login'));
	}, []);

	if (!user) return <p>Loading...</p>;

	async function handleLogout() {
		await fetch('/api/auth/logout', { method: 'POST' });
		router.push('/masterleague/login'); // redirect to login page after logout
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
