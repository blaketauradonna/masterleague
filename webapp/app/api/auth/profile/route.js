// profile api route

import { parse } from 'cookie';
import { openDb } from '@/lib/db.js';

export async function GET(req) {
  const cookies = parse(req.headers.get('cookie') || '');
  const userId = cookies.session;

  if (!userId) {
    return new Response(JSON.stringify({ error: 'Not logged in' }), { status: 401 });
  }

  const db = await openDb();
  const user = await db.get('SELECT id, email FROM users WHERE id = ?', userId);

  if (!user) {
    return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
  }

  return new Response(JSON.stringify({ user }), { status: 200 });
}
